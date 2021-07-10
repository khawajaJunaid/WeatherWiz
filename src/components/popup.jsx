import React from "react";
import { Box, Text,Image } from "grommet";
// import { Grid } from "grommet-icons";
import { IsMobileHook, IsTabletHook } from "./common/Responsive";
import { useSelector } from "react-redux";




const Popup = () => {

const isMobile = IsMobileHook();
const isTablet = IsTabletHook();
const setDaytsetter=useSelector( (state) => state.Daystate.Daystate   );
const isMobileorTablet = isMobile || isTablet;

    
    
    
    return (
   
    
   
   <>
    
        
           
            
        <Box style={{overflowY:"scroll" }} direction="row" gap="small"   wrap align="start"
     
             
        >
             <Box wrap align="start"  width="100%" alignContent="center"  >
                <h3 >Hourly stats for {setDaytsetter.date}:</h3> 
            </Box>
            
      
        {setDaytsetter.hour.map( (hours) => (
                
                <Box width={isMobileorTablet ? "100%" : "30%"}
                // wrap align="start"
                    // background="red"
                    justify="center"
                    margin="small"
                    // border="all"
                    direction="row"
                    key={hours.time_epoch}
                >
                    <Text>  
                        <h4> {hours.time} : </h4>
                        <Image src={hours.condition.icon} loading="lazy" />
                        <br/>
                        
                        Temperature(°C): {hours? (hours.temp_c):null } 
                            <br/>
                        wind speed(mph): {hours.wind_mph} 
    
                    </Text>
                </Box>
            ))
        }
         
        </Box>
   
     
  </>
)} ;
export default Popup;