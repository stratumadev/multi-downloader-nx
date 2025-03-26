// build requirements
import fs from 'fs-extra';
import pkg from '../package.json';
import modulesCleanup from 'removeNPMAbsolutePaths';
import { execSync } from 'child_process';
import { console } from './log';
import util from 'util';
const exec = util.promisify(require('child_process').exec);
const buildsDir = './builds';
const bun = 'bun-';

type BuildTypes = `${'windows'|'darwin'|'linux'}-${'x64'|'arm64'}`|'linux-arm64'

(async () => {
  const buildType = process.argv[2] as BuildTypes;
  const isGUI = process.argv[3] === 'true';

  buildBinary(buildType, isGUI);
})();

// main
async function buildBinary(buildType: BuildTypes, gui: boolean) {
  const buildStr = 'multi-downloader-nx';
  const acceptablePlatforms = ['windows','linux','darwin'];
  const acceptableArchs = ['x64','arm64'];
  const acceptableBuilds: string[] = ['linux-arm64'];
  for (const platform of acceptablePlatforms) {
    for (const arch of acceptableArchs) {
      acceptableBuilds.push(platform+'-'+arch);
    }
  }
  if(!acceptableBuilds.includes(buildType)){
    console.error('Unknown build type!');
    process.exit(1);
  }
  await modulesCleanup('.');
  if(!fs.existsSync(buildsDir)){
    fs.mkdirSync(buildsDir);
  }
  const buildFull = `${buildStr}-${getFriendlyName(buildType)}-${gui ? 'gui' : 'cli'}`;
  const buildDir = `${buildsDir}/${buildFull}`;
  if(fs.existsSync(buildDir)){
    fs.removeSync(buildDir);
  }
  fs.mkdirSync(buildDir);
  console.info('Running bun build');

  const buildConfig = [
    'bun build',
    '--compile',
    '--sourcemap',
    '--bytecode',
    '--external=cheerio',
    `--target=${bun + buildType}`,
    gui ? './gui.ts' : './index.ts',
    '--outfile', `${buildDir}/${pkg.short_name}`
  ];
  console.info(`[Build] Build configuration: ${buildFull}`);
  try {
    await exec(buildConfig.join(' '));
  }
  catch(e){
    console.info(e);
    process.exit(1);
  }
  fs.mkdirSync(`${buildDir}/config`);
  fs.mkdirSync(`${buildDir}/videos`);
  fs.mkdirSync(`${buildDir}/widevine`);
  fs.mkdirSync(`${buildDir}/playready`);
  fs.copySync('./config/bin-path.yml', `${buildDir}/config/bin-path.yml`);
  fs.copySync('./config/cli-defaults.yml', `${buildDir}/config/cli-defaults.yml`);
  fs.copySync('./config/dir-path.yml', `${buildDir}/config/dir-path.yml`);
  fs.copySync('./config/gui.yml', `${buildDir}/config/gui.yml`);
  fs.copySync('./modules/cmd-here.bat', `${buildDir}/cmd-here.bat`);
  fs.copySync('./modules/NotoSans-Regular.ttf', `${buildDir}/NotoSans-Regular.ttf`);
  fs.copySync('./package.json', `${buildDir}/package.json`);
  fs.copySync('./docs/', `${buildDir}/docs/`);
  fs.copySync('./LICENSE.md', `${buildDir}/docs/LICENSE.md`);
  if (gui) {
    fs.copySync('./gui', `${buildDir}/gui`);
    fs.copySync('./node_modules/open/xdg-open', `${buildDir}/xdg-open`);
  }
  if(fs.existsSync(`${buildsDir}/${buildFull}.7z`)){
    fs.removeSync(`${buildsDir}/${buildFull}.7z`);
  }
  execSync(`7z a -t7z "${buildsDir}/${buildFull}.7z" "${buildDir}" -mx=9`,{stdio:[0,1,2]});
}

function getFriendlyName(buildString: string): string {
  if (buildString.includes('armv7')) {
    return 'android';
  }
  if (buildString.includes('linuxstatic')) {
    buildString = buildString.replace('linuxstatic', 'linux');
  }
  return buildString;
}