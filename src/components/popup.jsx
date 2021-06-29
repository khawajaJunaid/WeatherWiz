import React from "react";
import { Box, Text,Layer,Image } from "grommet";
// import { Grid } from "grommet-icons";

const Popup = ({    setDaytsetter,display, setDisplayOut }) => (
    <>
    {display && (
      <Layer
      
      
        onEsc={() => setDisplayOut(false)}
        onClickOutside={() => setDisplayOut(false)}
        // pad="small"
        plain
        className="popup-card"
        position="center"
      > 
        <h3>Hourly stats for    {setDaytsetter.date} : </h3>
        <Box style={{overflowY:"scroll" }} direction="row" gap="small" margin={"left :100px"} wrap align="start" >
        

        {    
            setDaytsetter.hour.map( (hours) => (
                
                <Box width="30%"
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
                        {/* min temp is for 3 days: 
                        {days.day.mintemp_c}                                                */}
                    </Text>
                </Box>
            ))
        }
         
        </Box>
      </Layer>
     )} 
  </>
);
export default Popup;