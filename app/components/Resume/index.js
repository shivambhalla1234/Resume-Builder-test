/**
 *
 * Resume
 *
 */
import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import './styles.scss';
import { TextareaAutosize, FormLabel, TextField } from '@material-ui/core';
import { SettingsPhoneRounded } from '@material-ui/icons';

const useStyles = makeStyles(theme=>({
  root: {
    minWidth: 400,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    fontSize: 14,
    fontWeight : "bold",
  },
  pos: {
    marginBottom: 10,
  },
  formControl: {
    marginBottom: 5,
    minWidth: 120,
    width: '25ch',
  },
  nameInput: {
    '& > *': {
      marginBottom: 12,
      marginRight: "5%",
      width: '25ch',
      float : 'left',
    },
  },
  row1: {
    marginBottom: 5,

  },
  saveEmployeeButton: {
    float : 'right',
    marginLeft: '10px'
  },
  inputCards : {
    marginBottom: 5,
    marginTop: 10,
  },
  addButton :{
    float : 'right',
    fontSize: "26px",
    marginBottom :10,
    marginTop : -30,
    borderRadius : "50%",
    color : "black",
    border: "2px solid #f44336",
    "&:hover": {
      backgroundColor: "#f44336",
      color: "white",
    },
  },
  saveButton : {
    float : 'right',
    fontSize: "26px",
    marginBottom :10,
    marginLeft :10,
    marginTop : -30,
    borderRadius : "50%",
    color : "black",
    border: "2px solid #008CBA",
    "&:hover": {
      backgroundColor: "#008CBA",
      color: "white",
    },
  },
  cancelButton: {
    float : 'right',
    fontSize: "26px",
    marginLeft :10,
    borderRadius : "50%",
    color : "black",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  editButton: {
    float : 'right',
    fontSize: "26px", 
    marginRight :-14,
    borderRadius : "50%",
    color : "black",
    "&:hover": {
      color: "#008CBA",
    },
  },
  table: {
    minWidth: 650,
  },
  skillInput: {
    marginRight : 100,
    width: '40ch',
  },
  tableProject : {
    marginTop : 10,
  },
  collapseCol :{
    width :"1px",
  },
  addProjectHeading :{
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  addProjectBar: {
    position: 'relative',
  },
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function Resume({getProblemSolvedValue}) {
  const classes = useStyles();
  
  const initProjectData = {
    "description": "",
    "problemSolved": "",
    "keyRoleAndResponsibilities": "",
    "keyTools": "",
  }

  const initProblemSolved = {
    "problemSolve": "",
  }


  const [role, setRole] = React.useState('');
  const [valueAdded, setValueAdded] = React.useState("");
  const [profileSummary, setProfileSummary] = React.useState("");
  const [hobbies, setHobbies] = React.useState("");
  const [projectData, setProjectData] = useState(initProjectData);
  const [projectButton,setProjectButton] = useState(false);
  const [projectArray, setProjectArray] =useState([]);
  const [problemSolvedButton,setProblemSolvedButton] = useState(false);
  const [problemSolvedArray, setProblemSolvedArray] =useState([]);
  const [problemSolvedData,setProblemSolvedData]=useState("");
  const [qualificationArray, setQualificationArray] =useState([]);
  const [qualificationButton,setQualificationButton] = useState(false);
  const [qualificationData,setQualificationData]=useState("");
  const [profileSummaryArray, setProfileSummaryArray] =useState([]);
  const [profileSummaryButton,setProfileSummaryButton] = useState(false);
  const [profileSummaryData,setProfileSummaryData]=useState("");
  const [problemSolvedProjectArray, setProblemSolvedProjectArray] =useState([]);
  const [problemSolvedProjectButton,setProblemSolvedProjectButton] = useState(false);
  const [problemSolvedProjectData,setProblemSolvedProjectData]=useState("");
  const [roleProjectArray, setRoleProjectArray] =useState([]);
  const [roleProjectButton,setRoleProjectButton] = useState(false);
  const [roleProjectData,setRoleProjectData]=useState("");
  const [toolsProjectArray, setToolsProjectArray] =useState([]);
  const [toolsProjectButton,setToolsProjectButton] = useState(false);
  const [toolsProjectData,setToolsProjectData]=useState("");
  const [blogArray, setBlogArray] =useState([]);
  const [blogButton,setBlogButton] = useState(false);
  const [blogData,setBlogData]=useState("");
  const [QualificationDataWithPipe,setQualificationDataWithPipe]=useState("");

  // Test data for converting pipe seperated string to array
  useEffect(()=>{
    setQualificationDataWithPipe(getProblemSolvedValue);
  })

  

  function createData(name) {
    return {name};
  }

  // const rows = [
  //   createData('Leadership/Management Skills :'),
  //   createData('Programming/Scripting Language Used :'),
  //   createData('API Testing Tools Used :'),
  //   createData('Web Testing Automation Libraries :'),
  //   createData('Databases used :'),
  //   createData('Desktop Application Automation Tools/Software :'),
  //   createData('CI/CD Tools :'),
  //   createData('Cloud for Testing :'),
  // ];


  const handleProjectOpen = () => {
    setProjectButton(true);
  };

  const handleProjectClose = () => {
    setProjectButton(false);
  };

  const handleProblemSolvedOpen = () => {
    setProblemSolvedButton(true);
  };

  const handleBlogClose = () => {
    setBlogButton(false);
  };

  const handleBlogOpen = () => {
    setBlogButton(true);
  };

  const handleProblemSolvedClose = () => {
    setProblemSolvedButton(false);
  };

  const handleQualificationOpen = () => {
    setQualificationButton(true);
  };

  const handleQualificationClose = () => {
    setQualificationButton(false);
  };

  const handleProfileSummaryOpen = () => {
    setProfileSummaryButton(true);
  };

  const handleProfileSummaryClose = () => {
    setProfileSummaryButton(false);
  };

  const handleRoleProjectOpen = () => {
    setRoleProjectButton(true);
  };

  const handleRoleProjectClose = () => {
    setRoleProjectButton(false);
  };

  const handleToolsProjectOpen = () => {
    setToolsProjectButton(true);
  };

  const handleToolsProjectClose = () => {
    setToolsProjectButton(false);
  };

  const handleProblemSolvedProjectOpen = () => {
    setProblemSolvedProjectButton(true);
  };

  const handleProblemSolvedProjectClose = () => {
    setProblemSolvedProjectButton(false);
  };


  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const handleValueAdded = (event) => {
    setValueAdded(event.target.value);
  };
  const handleProfileSummary = (event) => {
    setProfileSummary(event.target.value);
  };
  const handleHobbies = (event) => {
    setHobbies(event.target.value);
  };
  const handleQualification = (event) => {
    setQualification(event.target.value);
  };

  const handleBlog = (event) => {
    setBlog(event.target.value);
  };

  function ellipsify (str) {  
    if (str.length > 20) {
        return ("Project Description : "+ str.substring(0, 20) + "...");
    }
    else {
        return ("Project Description : " + str);
    }
  }

  const insertProjectData = () => {
    setProjectArray([...projectArray, projectData]);
    setProjectData(initProjectData);
  }

  const insertProblemSolvedArray = () => {
    setProblemSolvedArray((olditems)=>{
      return [...olditems,problemSolvedData];
    });
    setProblemSolvedData("");
  }

  const insertQualificationArray = () => {
    setQualificationArray((olditems)=>{
      return [...olditems,qualificationData];
    });
    setQualificationData("");
  };

  const insertProfileSummaryArray = () => {
    setProfileSummaryArray((olditems)=>{
      return [...olditems,profileSummaryData];
    });
    setProfileSummaryData("");
  };

  const insertRoleProjectArray = () => {
    setRoleProjectArray((olditems)=>{
      return [...olditems,roleProjectData];
    });
    setRoleProjectData("");
  };

  const insertToolsProjectArray = () => {
    setToolsProjectArray((olditems)=>{
      return [...olditems,toolsProjectData];
    });
    setToolsProjectData("");
  };

  const insertBlogArray = () => {
    setBlogArray((olditems)=>{
      return [...olditems,blogData];
    });
    setBlogData("");
  };

  const insertProblemSolvedProjectArray = () => {
    setProblemSolvedProjectArray((olditems)=>{
      return [...olditems,problemSolvedProjectData];
    });
    setProblemSolvedProjectData("");
  };

  const deleteProblemSolvedArray = (id) => {
    setProblemSolvedArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const deleteQualificationArray = (id) => {
    setQualificationArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const deleteProjectArray = (id) => {
    setProjectArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const deleteProfileSummaryArray = (id) => {
    setProfileSummaryArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const deleteBlogArray = (id) => {
    setBlogArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const deleteRoleProjectArray = (id) => {
    setRoleProjectArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const deleteToolsProjectArray = (id) => {
    setToolsProjectArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const deleteProblemSolvedProjectArray = (id) => {
    setProblemSolvedProjectArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    })
  };

  const editQualificationArray = (id) => {
    setQualificationButton(true);
    setQualificationData(qualificationArray[id]);
    setQualificationArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    });
  };

  const editProfileSummaryArray = (id) => {
    setProfileSummaryButton(true);
    setProfileSummaryData(profileSummaryArray[id]);
    setProfileSummaryArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    });
  };

  const editBlogArray = (id) => {
    setBlogButton(true);
    setBlogData(blogArray[id]);
    setBlogArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    });
  };

  const editProblemSolvedArray = (id) => {
    setProblemSolvedButton(true);
    setProblemSolvedData(problemSolvedArray[id]);
    setProblemSolvedArray((oldItems)=>{
      return oldItems.filter((arrElement,index)=> {
        return index!==id;
      })
    });
  };

  const okok = () =>{
    setQualificationArray(QualificationDataWithPipe.split("|"));
  };

  const okokback = () =>{
    var QualificationString=qualificationArray.join("|");
    alert(QualificationString);
  }

  const cancelQualification = () => {
    var currData=qualificationData;
    if(currData=="")
    setQualificationButton(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
  // things to add more :
  // add photo  ★★★
  // add transition to the add project Dialog Page.
  // correct the add project 
  // spinner before the data load   	★★★
  // try to make the rows draggable in the table ★
  // also try to rectify the problem in editing the entry in the row ★★
  // add the member list in the drop down in manager view ★★
  // how to make download button work  ★
  // how to make saga to connect the apis  ★★★
  // try to make the api works locally  ★★
  // delete the waste code and upload it in github ★★★

  // things done :
  // form pipe seperated string from the entry in the table ✓✓✓
  // take the string input in var and then splice it and form entries in the table ✓✓✓
  //
  return (
    <div>
      <div className={classes.row1}>
      <form className={classes.nameInput} noValidate autoComplete="off">
        <TextField 
        id="employee-name" 
        label="Name" 
        defaultValue="Shivam Bhalla" 
        disabled
        />
      </form>
      <FormControl className={classes.formControl} >
        <InputLabel id="role-select-label">Role</InputLabel>
        <Select
          labelId="role-select-label"
          id="role-simple-select"
          value={role}
          onChange={handleRole}
        >
          <MenuItem value={1}>Dev. Engineer</MenuItem>
          <MenuItem value={2}>Auto. Engineer</MenuItem>
          <MenuItem value={3}>Other</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.saveEmployeeButton} variant="contained" color="primary">Download</Button>
      {/* <Button className={classes.saveButton} variant="contained" color="primary">Preview</Button>
      <Button className={classes.saveButton} variant="contained" color="primary">Save</Button> */}
      </div>
      <div className={classes.inputCards}>
      <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Problem Solved for the Customers/Value Addition
        </Typography>
          <SaveIcon className={classes.saveButton} variant="contained" color="primary" onClick={()=>okok()}></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleProblemSolvedOpen()}></AddIcon>
        {problemSolvedArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {problemSolvedArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell className={classes.collapseCol}>
                {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                {row}
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return editProblemSolvedArray(index);
                  }}></EditIcon>
                </TableCell>
                <TableCell className={classes.collapseCol}>
                  <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteProblemSolvedArray(index);
                  }}></CancelIcon>
                </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Problem Solved Available'
        )}
        <div>
        <Dialog open={problemSolvedButton} onClose={()=>handleProblemSolvedClose()} aria-labelledby="form-dialog-title" fullWidth="true">
          <DialogTitle id="form-dialog-title">Add Problem Solved</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rows={3}
              margin="dense"
              label="Problem Solved:"
              fullWidth
              value={problemSolvedData} 
              onChange={e => setProblemSolvedData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleProblemSolvedClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleProblemSolvedClose(); insertProblemSolvedArray()}} color="primary">
              Save
            </Button>
        </DialogActions>
        </Dialog>
      </div>
      </CardContent>
      </Card>
      </div>
      <div className={classes.inputCards}>
      <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Skillset Summary
        </Typography>
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell align="left">Skills</TableCell>
          </TableRow>
        </TableHead>
      </Table>
      </TableContainer>
      </CardContent>
      </Card>
      </div>
      <div className={classes.inputCards}>
      <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Qualification
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary" onClick={()=>okokback()}></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleQualificationOpen()}></AddIcon>
        {qualificationArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {qualificationArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell className={classes.collapseCol}>
                {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                {row}
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return editQualificationArray(index);
                  }}></EditIcon>
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteQualificationArray(index);
                  }}></CancelIcon>
                </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Qualifcation Data Available'
        )}
        <div>
        <Dialog open={qualificationButton} onClose={()=>handleQualificationClose()} aria-labelledby="form-dialog-title" fullWidth="true">
          <DialogTitle id="form-dialog-title">Add Qualification</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rows={3}
              margin="dense"
              label="Qualification:"
              fullWidth
              value={qualificationData} 
              onChange={e => setQualificationData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleQualificationClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleQualificationClose(); insertQualificationArray()}} color="primary">
              Save
            </Button>
        </DialogActions>
        </Dialog>
      </div>
      </CardContent>
      </Card>
      </div>
      <div className={classes.inputCards}>
      <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Blogs
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary"></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleBlogOpen()}></AddIcon>
        {blogArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {blogArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell className={classes.collapseCol}>
                {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                {row}
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return editBlogArray(index);
                  }}></EditIcon>
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteBlogArray(index);
                  }}></CancelIcon>
                </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Blog Data Available'
        )}
        <div>
        <Dialog open={blogButton} onClose={()=>handleBlogClose()} aria-labelledby="form-dialog-title" fullWidth="true">
          <DialogTitle id="form-dialog-title">Add Blog</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rows={3}
              margin="dense"
              label="Blogs:"
              fullWidth
              value={blogData} 
              onChange={e => setBlogData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleBlogClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleBlogClose(); insertBlogArray()}} color="primary">
              Save
            </Button>
        </DialogActions>
        </Dialog>
      </div>
      </CardContent>
      </Card>
      </div>
      <div className={classes.inputCards}>
      <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Profile Summary
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary"></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleProfileSummaryOpen()}></AddIcon>
        {profileSummaryArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {profileSummaryArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell className={classes.collapseCol}>
                {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                {row}
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return editProfileSummaryArray(index);
                  }}></EditIcon>
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteProfileSummaryArray(index);
                  }}></CancelIcon>
                </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Profile Summary Available'
        )}
        <div>
        <Dialog open={profileSummaryButton} onClose={()=>handleProfileSummaryClose} aria-labelledby="form-dialog-title" fullWidth="true">
          <DialogTitle id="form-dialog-title">Add Profile Summary</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rows={3}
              margin="dense"
              label="Summary:"
              fullWidth
              value={profileSummaryData} 
              onChange={e => setProfileSummaryData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleProfileSummaryClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleProfileSummaryClose(); insertProfileSummaryArray()}} color="primary">
              Save
            </Button>
        </DialogActions>
        </Dialog>
      </div>
      </CardContent>
      </Card>
      </div>
      <div className={classes.inputCards}>
      <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Projects
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary"></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleProjectOpen()}></AddIcon>
        {projectArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {projectArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
              <TableCell className={classes.collapseCol}>
                {index+1}
              </TableCell>
                <TableCell component="th" scope="row">
                {ellipsify(row.description)}
              </TableCell>
              <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton}></EditIcon>
              </TableCell>
              <TableCell className={classes.collapseCol}>
              <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteProblemSolvedArray(index);
                }}></CancelIcon>
              </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Projects Available'
        )}
        <div>
        <Dialog fullScreen open={projectButton} onClose={()=>handleProjectClose} transitionDuration={1000} aria-labelledby="form-dialog-title">
        <AppBar className={classes.addProjectBar}>
          <Toolbar>
            <IconButton edge="start" onClick={()=>handleProjectClose} aria-label="close" color="inherit">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.addProjectHeading}>
              Add Project
            </Typography>
            <Button variant="outlined" autoFocus aria-label="close" color="inherit" onClick={() => {handleProjectClose(); insertProjectData()}}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.inputCards}>
        <Card className={classes.root} variant="outlined" raised="true">
        <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Project Description:
        </Typography>
        <TextField 
              autoFocus
              multiline
              margin="dense"
              fullWidth
              value={projectData.description} 
              onChange={e => setProjectData({...projectData, description: e.target.value})}
            />
        </CardContent>
        </Card>
        </div>
        <div className={classes.inputCards}>
        <Card className={classes.root} variant="outlined" raised="true">
        <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Problem Solved for the Customer:
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary"></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleProblemSolvedProjectOpen()}></AddIcon>
        {problemSolvedProjectArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {problemSolvedProjectArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell className={classes.collapseCol}>
                {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                {row}
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton} ></EditIcon>
                </TableCell>
                <TableCell className={classes.collapseCol}>
                  <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteProblemSolvedProjectArray(index);
                  }}></CancelIcon>
                </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Problem Solved for the Customer Available'
        )}
        <div>
        <Dialog open={problemSolvedProjectButton} onClose={()=>handleProblemSolvedProjectClose()} aria-labelledby="form-dialog-title" fullWidth="true">
          <DialogTitle id="form-dialog-title">Problem Solved for the Customer:</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rows={3}
              margin="dense"
              fullWidth
              value={problemSolvedProjectData} 
              onChange={e => setProblemSolvedProjectData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleProblemSolvedProjectClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleProblemSolvedProjectClose(); insertProblemSolvedProjectArray()}} color="primary">
              Save
            </Button>
          </DialogActions>
          </Dialog>
          </div>
          </CardContent>
          </Card>
          </div>
          <div className={classes.inputCards}>
        <Card className={classes.root} variant="outlined" raised="true">
        <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          My Role & Key Responsibilities:
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary"></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleRoleProjectOpen()}></AddIcon>
        {roleProjectArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {roleProjectArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell className={classes.collapseCol}>
                {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                {row}
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton} ></EditIcon>
                </TableCell>
                <TableCell className={classes.collapseCol}>
                  <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteRoleProjectArray(index);
                  }}></CancelIcon>
                </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Role or Key Responsibilities Available'
        )}
        <div>
        <Dialog open={roleProjectButton} onClose={()=>handleRoleProjectClose()} aria-labelledby="form-dialog-title" fullWidth="true">
          <DialogTitle id="form-dialog-title">Role & Key Responsibilities:</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rows={3}
              margin="dense"
              fullWidth
              value={roleProjectData} 
              onChange={e => setRoleProjectData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleRoleProjectClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleRoleProjectClose(); insertRoleProjectArray()}} color="primary">
              Save
            </Button>
          </DialogActions>
          </Dialog>
          </div>
          </CardContent>
          </Card>
          </div>
          <div className={classes.inputCards}>
        <Card className={classes.root} variant="outlined" raised="true">
        <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Key Tools/Technologies Used (Upto 5 Tools/Technologies):
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary"></SaveIcon>
        <AddIcon className={classes.addButton} variant="contained" color="primary" onClick={()=>handleToolsProjectOpen()}></AddIcon>
        {toolsProjectArray.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table className={classes.tableProject} size="small" aria-label="a dense table">
          <TableBody>
            {toolsProjectArray.map((row,index) => (
            <>
              <StyledTableRow key={index}>
                <TableCell className={classes.collapseCol}>
                {index+1}
                </TableCell>
                <TableCell component="th" scope="row">
                {row}
                </TableCell>
                <TableCell className={classes.collapseCol}>
                <EditIcon className={classes.editButton}></EditIcon>
                </TableCell>
                <TableCell className={classes.collapseCol}>
                  <CancelIcon className={classes.cancelButton} edge="start" aria-label="close" id={index} onClick={()=>{
                    return deleteToolsProjectArray(index);
                  }}></CancelIcon>
                </TableCell>
              </StyledTableRow>
            </>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        ) : (
          'No Key Tools or Technologies Available'
        )}
        <div>
        <Dialog open={toolsProjectButton} onClose={()=>handleToolsProjectClose()} aria-labelledby="form-dialog-title" fullWidth="true">
          <DialogTitle id="form-dialog-title">Key Tools/Technologies Used:</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rows={3}
              margin="dense"
              fullWidth
              value={toolsProjectData} 
              onChange={e => setToolsProjectData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() =>handleToolsProjectClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleToolsProjectClose(); insertToolsProjectArray()}} color="primary">
              Save
            </Button>
          </DialogActions>
          </Dialog>
          </div>
          </CardContent>
          </Card>
          </div>

        </Dialog>
      </div>
      </CardContent>
      </Card>
      </div>
      <div className={classes.inputCards}>
      <Card className={classes.root} variant="outlined" raised="true">
      <CardContent>
        <Typography className={classes.title} color="primary" gutterBottom>
          Personal Information & Areas of Interest/Hobbies
        </Typography>
        <SaveIcon className={classes.saveButton} variant="contained" color="primary"></SaveIcon>
        <form className={classes.nameInput} noValidate autoComplete="off">
        <TextField id="employee-email" label="Email" />
        <TextField id="employee-ph-no" label="Phone Number" required />
        <TextField id="employee-other-no" label="Optional Number" />
      </form>
        <TextField
          placeholder="Eg. Treking , Public Speaking..."
          multiline
          fullWidth
          rows={5}
          variant="outlined"
          value={hobbies}
          onChange={handleHobbies}
        />
      </CardContent>
      </Card>
      </div> 
    </div>
  );
}

Resume.propTypes = {};

export default memo(Resume);
