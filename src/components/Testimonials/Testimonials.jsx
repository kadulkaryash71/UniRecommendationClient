import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import reactLogo from '../../assets/react.svg';
import './Testimonials.css';

function Testimonials() {

    const cards = [
        {
            name: "John Doe",
            image: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at sit perspiciatis cumque veniam cupiditate. Laudantium, esse. Praesentium, ea quam!"
        },
        {
            name: "Jane Doe",
            image: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at sit perspiciatis cumque veniam cupiditate. Laudantium, esse. Praesentium, ea quam!"
        },
        {
            name: "Alcaraz",
            image: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti at sit perspiciatis cumque veniam cupiditate. Laudantium, esse. Praesentium, ea quam!"
        },
    ]

    const handleLeftScroll = (event) => {
        console.log("left")
    }
    const handleRightScroll = (event) => {
        console.log("right")
    }

    return (
        <section className="service-section testimonials px-5 py-5">
            <div className="container-fluid">
                <div className="row justify-content-center py-3">
                    <div className="col-md-8 col-12 text-center">
                        <p className="service-main-heading">Success Stories</p>
                    </div>
                </div>
                <div className="card-holder row justify-content-center align-items-center">
                    {/* <i onClick={handleLeftScroll} className="col-md-2 arrow-left"><ArrowCircleLeftIcon /></i> */}
                    {cards.map((card, index) => 
                        <div className="col-lg-6 col-sm-12">
                            <ActionAreaCard name={card.name} image={card.image} quote={card.quote} />
                        </div>
                    )}
                    {/* <i onClick={handleRightScroll} className="col-md-2 arrow-right"><ArrowCircleRightIcon /></i> */}
                </div>
            </div>
        </section>

    )
}

function ActionAreaCard(props) {
    return (
        <div className="m-1">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={props.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.quote}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default Testimonials;