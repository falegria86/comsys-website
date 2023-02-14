import Image from "next/image";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { blue, red } from "@mui/material/colors";
import StorageIcon from "@mui/icons-material/Storage";
import Button from "@mui/material/Button";

import imgSistemas from "../../assets/imgs/sistemas.jpg";

const CardServicio = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            <StorageIcon />
          </Avatar>
        }
        title={
          <Typography className="font-bold text-lg">
            Sistemas médicos
          </Typography>
        }
      />
      <Image src={imgSistemas} alt="Imagen servicio" className="w-full" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Praesent dapibus, neque id cursus faucibus, tortor neque egestas
          auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Leer más</Button>
      </CardActions>
    </Card>
  );
};

export default CardServicio;
