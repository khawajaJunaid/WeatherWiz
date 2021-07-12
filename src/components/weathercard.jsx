import React, { useEffect } from "react";
import { Box,Form,Text,TextInput,Button,Image,Header} from "grommet";

// import {Home, Windows} from "grommet-icons"

// import { useHistory } from "react-router";
import {  useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import '../index.css'
import * as Sentry from "@sentry/browser"

import { setDaystate } from "../features/counter/DaystateSlice";
// import { hotjar } from 'react-hotjar';

// hotjar.initialize(hjid, hjsv);

// hotjar.identify('USER_ID', { userProperty: 'value' });
// import { captureException } from "@sentry/browser";
function WeatherWizard  () 
{
    
    const [value, setValue] = React.useState(null);
    const [search,setSearch]=React.useState(" ");   
    // const [mopen,setMopen] =React.useState(false);
    // const [day,setDay] =React.useState();
    // const [daysetter,setDaytsetter]=React.useState();
    const dispatch = useDispatch();
    const baseURL = process.env.REACT_APP_API_URL;
    const history =useHistory();

    const fetchApi = async (city) =>{
        console.log(baseURL)

        const url=`${baseURL}forecast.json?key=ad0f9c31f1114323a04154559212206&q=${city}&days=10&aqi=no&alerts=no` 
        const response = await fetch(url);
        const resJson= await response.json();
        if (resJson.error )
        Sentry.captureException(resJson.error);
        
        // console.log(resJson,"this is the error" );
        setValue(resJson);
       

    };

    useEffect( ()=> {

        const intervalId = window.setInterval(() => 
        {
          fetchApi(search);}, 300000);
          console.log(intervalId);
    // eslint-disable-next-line
    }, [value]

    )

    

    return(
            <>
            {/* <Popup setDaytsetter={daysetter} display={mopen} setDisplayOut={(value) => setMopen(value)} /> */}
           
            <Header background="#fff"  align="center">
            <Box
                direction="row"
                justify="center"
                pad="small"
                // background="black"
                margin="left 500px"
                overflow="auto"
                
                >
                    <Image src="https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png"  width="85px"  />
                    <h1 font="poppins" > WeatherWiz</h1>
                    
                </Box>
          
            </Header>
            {/* <Box
                direction="row"
                justify="center"
                pad="medium"
                
                >
                    <Image src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"  width="100px"  />
                    <h1> Weatherwiz</h1>
                    
                </Box>
                  */}
                
                

            
            <Box align="center" justify="center" background="#fff" >
                
                    <Box 
                        align="center"
                        background="#f4f5f7"  //"#1B3664"
                        width ="500px"
                        height="auto"
                        round="12px"
                        padding="50%"
                        gap="small"
                        pad="medium"
                    >
                    <Text  size="large" weight="bold" color="auto">
                                Enter name of the city :   
                    </Text>

                     <Form 
                           
                            onSubmit={( {value }) => 
                            {       // console.log("printing string withing form: "+value.search);
                                    setSearch(value.search);
                                    fetchApi(value.search);  }}       
                     
                     >
                            
                            <TextInput type="text" name="search" />
                            
                            <Box direction="row" gap="medium" margin="small" justify="center"  color="#8595af">
                                <Button justify="center"  type="submit" primary label="Submit" color="#344053" />
                                
                               
                                
                            </Box>

                        </Form>
                        { !value ? (  <h1>No data found   </h1> ) :
                            ( <Box
                              
                                //"#1B3664"
                                direction="column"
                                background="#fff"
                                width ="500px"
                                height="55%"
                                overflow="auto"
                                round="12px"
                                pad="small"

                                 >
                            
                                {
                                    !search ? (<h1 color="auto">No data found   </h1>):
                                    ( <>
                                         <Text size="large">Current weather for {search}</Text>
                                        <Box direction="column"   background="#fff">                                                               
                                            <Image width="60px" height="60px" src={value.current && value.current.condition ? (  value.current.condition.icon   ) :null } /> 
                                            <Text weight="bold" size="medium">{value.current && value.current.condition ? ( <> {value.current.condition.text} {value.current.temp_c}   </>) :null }°C</Text>
                                            
                                        </Box>
                                    
                                            <h3 justify="center">For hourly stats click below:</h3>
                                                <Text  size="large">  
                                                 {value && value.forecast && value.forecast.forecastday ?
                                                (  
                                                
                                                <Box direction="column" gap="small" >
                                                
                                                    {
                                                    value.forecast.forecastday.map( (days) => (
                                                        
                                                            
                                                        <Box 
                                                        
                                                        key={days.date_epoch}
                                                        direction="row" margin="bottom small" pad="xsmall"
                                                        justify="between"
                                                        align="center"
                                                        className="hover-box"
                                                        
                                                        border="all"  animation="fadeIn"  
                                                        // hoverIndicator={{
                                                        //     background: {
                                                        //       color: 'blue',
                                                        //     },
                                                        //     elevation: 'large' ,
                                                        //   }}    
                                                        elevation= "large"
                                                        round="10px"
                                                        onClick={() => {
                                                           dispatch(setDaystate(days));
                                                        //    setDaytsetter(days);
                                                        //     setMopen(true);
                                                            history.push("/popup");
                                                        
                                                            // alert('clicked');
                                                          }}
                                                          
                                                        >
                                                    
                                                           

                                                                    {days.date}:{" "}<br/>
                                                                    <Box  justify="center"
                                                                    align="center"
                                                                    >
                                                                    <Image width="50px" height="50px" src={days.day.condition.icon} />
                                                                    <Text color="red">
                                                                    
                                                                    {days.day.maxtemp_c} <Text color="blue">{" "}  {days.day.mintemp_c} </Text> 
                                                                     </Text> {"    "} 
                                                                    </Box>
                                                                    {/* min temp is for 3 days: 
                                                                    {days.day.mintemp_c} */}
                                                            
                                                                
                                                        </Box>

                                                        
                                                    ))
                                                    
                                                    /* <Text> {value.forecast.forecastday[0].day.maxtemp_c} and min is {value.forecast.forecastday[0].day.mintemp_c}
                                                    </Text>
                                                    
                                                    <Text> windspeed is  {value.current && value.current.condition ? ( value.current.wind_mph ) :null }
                                                    mph 
                                                    </Text> */
                                                    }
                                                    


                                                </Box>
                                                ): null} 
                                                    
                                                </Text>
                                            
                                        {/* </Box> */}
                                    </>
                                    )
                                
                                }
                                 
                            </Box>
                            )

                        }
                       
                 
                     </Box>
            </Box>
            </>
           
    )
    
};
export default WeatherWizard;