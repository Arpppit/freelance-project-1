import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Box } from '@mui/system'
import Container from '@mui/material/Container'
import SwipeableTextMobileStepper from './components/SwipeableTextMobileStepper';
import { Button, Dialog, Input, InputLabel, Snackbar, ThemeProvider, createTheme, useTheme } from '@mui/material';
import { blue, indigo } from '@mui/material/colors';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import DepartmentOverview from './Pages/DepartmentOverview';
import FacultyDetails from './Pages/FacultyDetails';
import TimeTable from './Pages/TimeTable';
import { useContext, useState } from 'react';
import AdminContext from './components/AdminContext';
import AdminDashboard from './Pages/AdminDashboard';
import Forum from './Pages/Forum';
import RollList from './Pages/RollList';
import LearningMaterial from './Pages/LearningMaterial';
import StudentAchievement from './Pages/StudentAchievement';
import axios from 'axios';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: indigo[900]
      }
    }
  })


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const adminContext = useContext(AdminContext)

  const [type, setType] = useState('login')

  const [snackbarMessage, setSnackbarMessage] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [adminOpen, setAdminOpen] = useState(false)
  const [admin, setAdmin] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [prevPassword, setPrevPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [otp, setOTP] = useState('')

  const login = async (username, password) => {
    await axios.post('http://127.0.0.1:5000/api/admin/login', {
      email: username,
      password: password
    }).then((response) => {

      setAdmin(true)
      setAdminOpen(false)
    }).catch((error) => {

      setSnackbarMessage('Error loggin in')
      setSnackbarOpen(true)
    })

  }

  const generateOTP = async (username, prevPassword, newPassword) => {
    await axios.post('http://127.0.0.1:5000/api/admin/generateOTP', {
      email: username,
      prevPassword: prevPassword,
      newPassword: newPassword
    }).then((response) => {

      setSnackbarMessage(`OTP sent to ${username} for password change.`)
      setSnackbarOpen(true)
      setType('changePassword')

    }).catch((error) => {

      setSnackbarMessage('Error changing password')
      setSnackbarOpen(true)
    })

  }

  const changePassword = async (username, otp) => {

    await axios.post('http://127.0.0.1:5000/api/admin/changePassword', {
      email: username,
      otp: otp
    }).then((response) => {

      setSnackbarMessage('Password changed successfully')
      setSnackbarOpen(true)
      setType('login')

    }).catch((error) => {

      setSnackbarMessage('Error changing password')
      setSnackbarOpen(true)
    })

  }


  const logout = () => {
    setAdmin(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <AdminContext.Provider value={{ admin, login, logout, setSnackbarOpen, setSnackbarMessage, setAdminOpen }} >
        <BrowserRouter>
          <Routes>
            {!admin && <Route path="/" element={<Home />} />}
            {admin && <Route path="/" element={<AdminDashboard />} />}
            <Route path="/departmentOverview" element={<DepartmentOverview />} />
            <Route path="/facultyDetails" element={<FacultyDetails />} />
            <Route path="/rollList" element={<RollList />} />
            <Route path="/timeTable" element={<TimeTable />} />
            <Route path="/learningMaterial" element={<LearningMaterial />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/studentsAchievements" element={<StudentAchievement />} />
          </Routes>
        </BrowserRouter>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleClose}
          message={snackbarMessage}
        // action={action}
        />

        <Dialog open={adminOpen} onClose={() => {
          setAdminOpen(false)
        }}>
          {type == 'login' &&
            <Box p={5} >
              <form style={{ display: 'flex', flexDirection: 'column' }}>
                <InputLabel >Admin Username</InputLabel>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <InputLabel >Admin Password</InputLabel>
                <Input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <Button variant='contained' type='submit' onClick={(e) => { e.preventDefault(); login(username, password) }} >Login</Button>
              </form>
              <Button variant='text' onClick={() => setType('generateOTP')}>ForgotPassword</Button>
            </Box>
          }
          {type == 'generateOTP' &&
            <Box p={5} >
              <form style={{ display: 'flex', flexDirection: 'column' }}>
                <InputLabel >Admin Username</InputLabel>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <InputLabel >Previous Password</InputLabel>
                <Input value={prevPassword} type="password" onChange={(e) => setPrevPassword(e.target.value)} />
                <br />
                <InputLabel >New Password</InputLabel>
                <Input value={newPassword} type="password" onChange={(e) => setNewPassword(e.target.value)} />
                <br />
                <br />
                <Button variant='contained' type='submit' onClick={(e) => { e.preventDefault(); generateOTP(username, prevPassword, newPassword) }} >Change Password</Button>
              </form>
              <Button variant='text' onClick={() => setType('login')}>Login</Button>
            </Box>
          }
          {type == 'changePassword' &&
            <Box p={5} >
              <form style={{ display: 'flex', flexDirection: 'column' }}>
                <InputLabel> OTP</InputLabel>
                <Input value={otp} onChange={(e) => setOTP(e.target.value)} />
                <br />
                <br />
                <Button variant='contained' type='submit' onClick={(e) => { e.preventDefault(); changePassword(username, otp) }} >Verify</Button>
              </form>
              <Button variant='text' onClick={() => setType('login')}>Login</Button>
            </Box>

          }
        </Dialog>
      </AdminContext.Provider>
    </ThemeProvider>
  );
}

export default App;
