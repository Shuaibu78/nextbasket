import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import Image from 'next/image';
import coolClock from "../../../public/assets/cool-clock.svg";
import areaChart from "../../../public/assets/area-chart.svg";
import arrowNext from "../../../public/assets/arrow-next.svg";

const FeaturedPostCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <Card sx={{ maxWidth: 350, maxHeight: 500, height: "100%", display: "flex", flexDirection: "column" }}>
      <Image src={imageUrl} alt="post card" width={200} height={200} style={{ width: "100%", maxHeight: "70%", objectFit: "cover" }} />

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <Stack direction="row" spacing={2}>
          <Typography variant="body1" color="#8EC2F2" fontSize="12px" fontWeight={400} lineHeight="16px" letterSpacing="0.2px">
            Google
          </Typography>
          <Typography variant="body1" color="#737373" fontSize="12px" fontWeight={400} lineHeight="16px" letterSpacing="0.2px">
            Trending
          </Typography>
          <Typography variant="body1" color="#737373" fontSize="12px" fontWeight={400} lineHeight="16px" letterSpacing="0.2px">
            New
          </Typography>
        </Stack>

        <Typography variant="h4" align="left" color="#252B42" fontWeight={400} fontSize="20px" lineHeight="30px" letterSpacing="0.2px">
          Loudest à la Madison #1 (L'integral)
        </Typography>

        <Typography variant="body1" align="left" color="#737373" fontSize="14px" fontWeight={400} lineHeight="20px" letterSpacing="0.2px">
          We focus on ergonomics and meeting you where you work. It's only a keystroke away.
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" columnGap={1}>
          <Box display="flex" justifyContent="flex-start" alignItems="center" columnGap={.5}>
            <Image src={coolClock} alt="book reader" width={15} height={15} />
            <Typography variant="body2" color="#737373" fontSize="12px" fontWeight={400} lineHeight="16px" letterSpacing="0.2px">
              22 April 2021
            </Typography>
          </Box>
          <Box display="flex" justifyContent="flex-start" alignItems="center" columnGap={.5}>
            <Image src={areaChart} alt="book reader" width={15} height={15} />
            <Typography variant="body2" color="#737373" fontSize="12px" fontWeight={400} lineHeight="16px" letterSpacing="0.2px">
              10 comments
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-start" alignItems="center" columnGap={.5} marginBlock="8px" sx={{ cursor: "pointer" }}>
          <Typography variant="body2" color="#737373" fontSize="14px" fontWeight={700} lineHeight="24px" letterSpacing="0.2px">
            Learn More
          </Typography>
          <Image src={arrowNext} alt="book reader" width={12} height={12} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default FeaturedPostCard