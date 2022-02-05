import React from "react";
import { Box, Button, Checkbox, Chip, FormControl, FormControlLabel, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import useStore from "../../../hooks/useStore";
import MultiSelect from "../../reusable/MultiSelect";
import { messageChannelContext } from "../../../provider/MessageChannel";
import LoadingButton from '@mui/lab/LoadingButton';
import { useSnackbar } from "notistack";

const DownloadSelector: React.FC = () => {
  const messageHandler = React.useContext(messageChannelContext);
  const [store, dispatch] = useStore();
  const [availableDubs, setAvailableDubs] = React.useState<string[]>([]);
  const [ loading, setLoading ] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    (async () => {
      dispatch({
        type: 'downloadOptions',
        payload: {
          ...store.downloadOptions,
          dubLang: await messageHandler?.handleDefault('dubLang'),
          q: await messageHandler?.handleDefault('q'),
          fileName: await messageHandler?.handleDefault('fileName')
        }
      });
      setAvailableDubs(await messageHandler?.availableDubCodes() ?? []);
    })();
  }, []);

  const addToQueue = async () => {
    setLoading(true);
    const res = await messageHandler?.resolveItems(store.downloadOptions);
    if (!res || !res.isOk) {
      console.error(res);
      setLoading(false);
      return enqueueSnackbar('The request failed. Please check if the ID is correct.', {
        variant: 'error'
      });
    } else {
      dispatch({
        type: 'queue',
        payload: res.value
      });
    }
    setLoading(false);
  }

  const listEpisodes = async () => {
    if (!store.downloadOptions.id) {
      return enqueueSnackbar('Please enter a ID', {
        variant: 'error'
      });
    }
    setLoading(true);
    const res = await messageHandler?.listEpisodes(store.downloadOptions.id);
    if (!res || !res.isOk) {
      console.log(res);
      setLoading(false);
      return enqueueSnackbar('The request failed. Please check if the ID is correct.', {
        variant: 'error'
      });
    } else {
      dispatch({
        type: 'episodeListing',
        payload: res.value
      });
    }
    setLoading(false);
  }

  console.log(store.queue, store.currentDownload);

  return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ m: 2, gap: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
      <TextField value={store.downloadOptions.id} required onChange={e => {
        dispatch({
          type: 'downloadOptions',
          payload: { ...store.downloadOptions, id: e.target.value }
        })
      }} label='Item ID' />
      <TextField type='number' value={store.downloadOptions.q} required onChange={e => {
        const parsed = parseInt(e.target.value);
        if (isNaN(parsed) || parsed < 0 || parsed > 10)
          return;
        dispatch({
          type: 'downloadOptions',
          payload: { ...store.downloadOptions, q: parsed }
        })
      }} label='Quality Level (0 for max)' />
      <TextField disabled={store.downloadOptions.all} value={store.downloadOptions.e} required onChange={e => {
        dispatch({
          type: 'downloadOptions',
          payload: { ...store.downloadOptions, e: e.target.value }
        })
      }} label='Episode Select' />
      <MultiSelect
        title='Dub Languages'
        values={availableDubs}
        selected={store.downloadOptions.dubLang}
        onChange={(e) => {
          dispatch({
            type: 'downloadOptions',
            payload: { ...store.downloadOptions, dubLang: e }
          });
        }}
        allOption
      />
      <TextField value={store.downloadOptions.fileName} onChange={e => {
        dispatch({
          type: 'downloadOptions',
          payload: { ...store.downloadOptions, fileName: e.target.value }
        })
      }} sx={{ width: '50%' }} label='Filename' />
      <Button onClick={() => dispatch({ type: 'downloadOptions', payload: { ...store.downloadOptions, all: !store.downloadOptions.all } })} variant={store.downloadOptions.all ? 'contained' : 'outlined'}>Download all</Button>
      <Button onClick={() => dispatch({ type: 'downloadOptions', payload: { ...store.downloadOptions, but: !store.downloadOptions.but } })} variant={store.downloadOptions.but ? 'contained' : 'outlined'}>Download all but</Button>
    </Box>
    <Box sx={{ gap: 2, flex: 0, m: 1, mb: 3, display: 'flex', justifyContent: 'center' }}>
      <LoadingButton loading={loading} onClick={listEpisodes} variant='contained'>Search for episodes</LoadingButton>
      <LoadingButton loading={loading} onClick={addToQueue} variant='contained'>Add to Queue</LoadingButton>
    </Box>
  </Box> 
};

export default DownloadSelector;