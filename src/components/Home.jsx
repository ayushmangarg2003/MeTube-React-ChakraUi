import { Box, Container, Heading, Img, Stack ,Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
  pos: "absolute",
  left:"50%",
  top:"10%",
  width:"100%",
  transform: "translate(-50%,-50%)",
  textTransform:"uppercase",
  fontSize:["1.5rem","2.5rem","3.5rem"],
  bgColor:"blackAlpha.600",
  color:"#fff"
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} py={'16'} >
        <Heading textTransform={"uppercase"} py="2" w={'fit-content'} borderBottom={'2px solid'} m={'auto'} >services</Heading>
        <Stack h={'full'}
        p="4"
        alignItems={'center'}
        direction={['column' , 'column' , 'row']}
        >
          <Image src={img5} filter={"hue-rotate(-110deg)"} h={['175','250','400']} />
          <Text padding={['2.5','2','10']} letterSpacing={"widest"} lineHeight={"165%"}
          textAlign={"center"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, porro. Corporis, tempore numquam veniam illum nemo commodi quisquam aliquam maxime omnis! Eius eaque fugiat labore molestias vel corrupti quos laborum quibusdam vitae iusto explicabo repudiandae placeat adipisci deserunt fuga ipsum totam enim eos doloremque tempora, aut quidem itaque! Necessitatibus aut dicta iure aperiam sint commodi doloremque nemo officiis voluptas, incidunt sed nisi aliquam voluptatibus dolorem maxime cupiditate dolore! Delectus totam, doloribus quisquam neque ducimus praesentium quo impedit, officia voluptatum dolore labore quaerat laboriosam dolor sit rerum fugit quidem consectetur numquam sapiente exercitationem consequatur quam amet expedita! Labore veniam esse facilis tempora iure nisi amet architecto, at optio cupiditate qui temporibus.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

const MyCarousel = () => (
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w='full' h={['40vh',"50vh","60vh", "70vh","100vh"]}>
      <Img src={img2}/>
      <Heading {...headingOptions}>
        Future of Gaming
      </Heading>
    </Box>
    <Box w='full' h={['40vh',"50vh","60vh", "70vh","100vh"]}>
      <Img src={img3}/>
      <Heading {...headingOptions}>
        Multiplayer Gaming
      </Heading>
    </Box>
    <Box w='full' h={['40vh',"50vh","60vh", "70vh","100vh"]}>
      <Img src={img4}/>
      <Heading {...headingOptions}>
        Virtual World
      </Heading>
    </Box>
  </Carousel>
);

export default Home
