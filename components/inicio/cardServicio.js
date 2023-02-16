import Image from "next/image";

import Link from "next/link";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import Button from "@mui/material/Button";

const CardServicio = ({ titulo, texto, icon, imgUrl, imgAlt, link }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: blue[500] }}>{icon}</Avatar>}
        title={<Typography className="font-bold text-lg">{titulo}</Typography>}
      />
      <Image src={imgUrl} alt={imgAlt} width={345} height={250} />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {texto}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={link}>
          <Button size="small">Leer más</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardServicio;
