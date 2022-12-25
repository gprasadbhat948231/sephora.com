
import { Box, Heading } from '@chakra-ui/react';
import { PieChart } from 'react-minimal-pie-chart';
import { useSelector } from 'react-redux';
const PiChart = () => {
    const{ pagesInfo} = useSelector((store) => store.adminManager);
    let totalValue=0
    let piChartData= pagesInfo && Object.keys(pagesInfo).map((page, i) => { totalValue+=Number(pagesInfo[page].count);return  { title: page,key:page, value: pagesInfo[page].count, color:pagesInfo[page].color.split(".")[0] }})
   //console.log(totalValue)
   let cummulative=0
   let angle=0
  return (
    <Box>
      <Heading size="lg"textAlign="center" color="pink" marginBottom={30}>Pi-Chart</Heading>
   <PieChart
          animate
          animationDuration={40}
          animationEasing="ease-in"
         center={[50, 50]}
       
          data={piChartData}
        //    lineWidth={15}
           lengthAngle={360}
          paddingAngle={0}
          radius={50}
        //   rounded
         startAngle={250}
         // viewBoxSize={[100, 100]}
          labelStyle={(segmentIndex) =>{let  page=piChartData[segmentIndex].title
            let degree=page=="Mens Jeans  "||page=="Womens Lip Stick "||page=="Men Perfume"||page=="Womens  Dresses"?"rotate(-75deg) translateX(-103px) translateY(-21px)":"rotate(0deg)"
           // console.log(page,degree)
        //  if(cummulative>90){
        //   angle=cummulative
        //  }else{
        //   angle=cummulative
        //  }
        //  console.log(angle,cummulative)
        //  ( piChartData[segmentIndex].value)*360/totalValue)
           
            return{
          
            fontSize: "3.5px",
            fontColor: "FFFFFA",
            fontWeight: "500",
            fontFamily: "sans-serif",
            //  transform: `rotate(${ (segmentIndex+1)*60/piChartData.length}deg)`translateX(${20}px) translateY(${-40}px)
              // transform: `rotate(${angle-20}deg) translateX(${10+angle}px) translateY(${10+angle}px)  `
              // margin: 0,
              // width: 0,
              // whiteSpace:" nowrap",
              // position: "absolute",
              // textAlign: "left",
              // transformOrigin: "bottom",
              // marginTop: "280px",
             // transform: `rotate(${angle-20}deg)`,
            // "-ms-transform": "rotate(-20deg)", /* IE 9 */ 
            //  "-webkit-transform": "rotate(-20deg)",/* Chrome, Safari, Opera */ 
             transform: degree,
            //   writingMode: "rl-tb"
            }}}
       
          label={(piChartData) => piChartData.dataEntry.title}
          labelPosition={70}
         
        />
  </Box>
  )
}

export default PiChart