import React from "react";

import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, direction }) => {
  console.log(videos);
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos?.map((videoItem, index) => (
        <Box key={index}>
          {videoItem.id.videoId && <VideoCard video={videoItem} />}
          {videoItem.id.channelId && <ChannelCard channelDetail={videoItem} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
