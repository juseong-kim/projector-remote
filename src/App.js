import './App.css'
import React, { useState, useEffect } from 'react'
import { IconButton, Button, Grid } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import HomeIcon from '@mui/icons-material/Home'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import SettingsIcon from '@mui/icons-material/Settings'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ReplayIcon from '@mui/icons-material/Replay'
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import axios from 'axios'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  // var inter = 0;
  // const [done, setDone] = useState(1);
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  var Socket;
  function start() {
    Socket = new WebSocket('ws://172.28.170.222:80/');
    // Socket = new WebSocket('ws://' + window.location.hostname + ':81/');
    Socket.onmessage = function (evt) {
      console.log(evt.data);
    }
    Socket.onopen = function () {
      console.log('Connected');
    }
  }

  function irSend(button) {
    console.log(button);
    console.log(Socket);
    Socket.send(button);
    Socket.onopen = function () {
      Socket.send(button);
      console.log('sent');
    }
    Socket.onclose = function (e) {
      setTimeout(start(), 1);
    }
  }



  useEffect(() => {
    start();
  }, [])


  return (
    <div>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container
          direction="row"
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          marginTop="0"
          maxWidth="600px"
        >

          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(1) }}>
              <PowerSettingsNewIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4} />
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(2) }}>
              <HomeIcon />
            </IconButton>
          </Grid>

          <Grid item xs={4} />
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(3) }}>
              <KeyboardArrowUpIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4} />

          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(4) }}>
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(5) }}>
              <RadioButtonCheckedIcon />
            </IconButton>
          </Grid>
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(6) }}>
              <ChevronRightIcon />
            </IconButton>
          </Grid>

          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(7) }}>
              <SettingsIcon />
            </IconButton>
          </Grid>
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(8) }}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </Grid>
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(9) }}>
              <ReplayIcon />
            </IconButton>
          </Grid>

          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(10) }}>
              <VolumeDownIcon />
            </IconButton>
          </Grid>
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(11) }}>
              <VolumeOffIcon />
            </IconButton>
          </Grid>
          <Grid container item justifyContent="center" xs={4}>
            <IconButton color="primary" onClick={() => { irSend(12) }}>
              <VolumeUpIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} />


          <Grid container item justifyContent="center" alignItems="center" xs={8}>
            <Button
              sx={{
                ml: 1,
                textTransform: "lowercase",
              }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode} mode &nbsp; {theme.palette.mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
            </Button>
          </Grid>
          <Grid container item justifyContent="center" alignItems="center" xs={4}>
            {/* {done === 0 ? <CircularProgress fontSize="small" /> : <CheckCircleOutlineIcon color="success" />} */}
            <CheckCircleOutlineIcon color="success" />
          </Grid>

          <Grid container item fontSize="0.7em" justifyContent="center" textAlign="center" xs={12}>
            Viewsonic M1 Mini+ Remote <br /><br /> Sincerely, Joe

          </Grid>

        </Grid>

      </Box>
    </div>
  );
}

// function thingSpeak(key) {
  //   if (done === 1) {
  //     setDone(0);
  //     inter = setInterval(function () {
  //       // call API every second until success
  //       axios.get(`https://api.thingspeak.com/update?api_key=2XA1TJQ0PXOTG9EL&field1=${key}`)
  //         .then(response => {
  //           if (response.data !== 0) {
  //             clearInterval(inter);
  //             setDone(1);
  //             // resetTS();
  //           }
  //           console.log(`GET ${key}, Response: ${response.data}`)
  //         }
  //         )
  //     }, 300);
  //   }
  //   // stop calls to API after 10 seconds
  //   // setTimeout(function(){console.log('10 seconds elapsed'); clearInterval(inter);},10000);
  // }

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}