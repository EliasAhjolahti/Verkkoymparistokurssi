import React from "react";
import { Card, CardContent, Typography, Avatar, Button } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export default function ProfileCard() {
  return (
    <Card
      sx={{
        width: 300,
        backgroundColor: grey[200],
        height: "auto",
        borderRadius: 8,
        border: "1px solid #ccc",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Avatar sx={{ width: 100, height: 100, margin: "auto" }} />
      <CardContent>
        <Typography sx={{fontWeight: 'bold'}} variant="h5" >Matti Meikäläinen</Typography>
        <Typography variant="body2" color="text.secondary">
          Full-Stack developer, passionate about coding and coffee
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" sx={{ marginBottom: 1, width: 200}}>
        Contact me
      </Button>
      <Typography variant="body2" color="text.secondary">Created with Material UI</Typography>
    </Card>
  );
}
