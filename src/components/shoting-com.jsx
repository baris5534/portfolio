import { ShootingStars } from "./shooting-stars";

export default function ShootingCom() {
    return (
         <div>
        <ShootingStars
            starColor="#9E00FF"
            trailColor="#2EB9DF"
            minSpeed={15}
            maxSpeed={35}
            minDelay={1000}
            maxDelay={3000}
        />
        <ShootingStars
            starColor="#FF0099"
            trailColor="#FFB800"
            minSpeed={10}
            maxSpeed={25}
            minDelay={2000}
            maxDelay={4000}
        />
        <ShootingStars
            starColor="#00FF9E"
            trailColor="#00B8FF"
            minSpeed={20}
            maxSpeed={40}
            minDelay={1500}
            maxDelay={3500}
        />
  </div>
    )
   
}
