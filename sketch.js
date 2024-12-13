let pSpeedx = 200
let pSpeedy = 300
let pSpeedC = 2
let gunY = 280
let enemyN = 5
let ammo = 50
let ammoColor = 0
let ammoColor2 = 3
let ammoColor3 = 3
let bulletStatus = 20
let score = 0
let lives = 10
let escaped = 0
let enemySpeed = 1
let bosSpeed = 0.3
let bosLives= 20


let bulletPosy = 300
let bulletSpeed = 8

let bullets = []
let enemies = []
let boss = []

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  for (let i = 0; i<enemyN; i++){
    let enemy = {
      x: random (140,250),
      y: random (-800,0)
    }
    enemies.push(enemy)
  }
  
  
    
    for (let i = 0; i<1; i++){
    let bos = {
      x: 200,
      y: (-50),
    }
    boss.push(bos)
  }
  


}
function draw() {
  background(186, 131, 73);
  
  
  enemySpeed += .00003
  
  let m = millis();
let mc = millis();
  
  
  //level one
  fill(92, 88, 84)
  square(-150,200,500)
  
    square(550,200,500)
  
  fill(212, 102, 51)
  square(200,200,90)
  
     fill(232, 83, 72)
  square(200,200,60)

  fill(112, 60, 24)
  square(113,50,25)
  
  fill(112, 60, 24)
  square(113,200,25)
  
   fill(112, 60, 24)
  square(288,350,25)
  
    fill(112, 60, 24)
  square(288,50,25)
  
  fill(112, 60, 24)
  square(288,200,25)
  
   fill(112, 60, 24)
  square(113,350,25)
  
  /////
  
  fill(112, 60, 24)
  square(113,50,20)
  
  fill(112, 60, 24)
  square(113,200,20)
  
   fill(112, 60, 24)
  square(288,350,20)
  
    fill(112, 60, 24)
  square(288,50,20)
  
  fill(112, 60, 24)
  square(288,200,20)
  
   fill(112, 60, 24)
  square(113,350,20)
  
  
  
  //player 
  
  // bullets
//    if (keyIs(32) == true){
//    fill(252, 157, 40)
//   ellipse(pSpeedx,bulletPosy -= bulletSpeed,5)
//   }
  for (let bullet of bullets) {
    
    fill(255, 179, 3,100)
  ellipse(bullet.x,bullet.y, 5,15)
    bullet.y -= bulletStatus
  }
  
 if (score >= 5){
    

  for (let bos of boss){
    
     fill(173, 171, 166)
  rect(bos.x+70,bos.y+42,13,21)
  
   fill(128, 81, 15)
  ellipse(bos.x+20,bos.y+33,130,5)
  
  fill(240, 204, 153)
  ellipse(bos.x + 25,bos.y+40,20) 
  
  fill(240, 204, 153)
  ellipse(bos.x - 25,bos.y+40,20) 
  
   fill(0)
  ellipse(bos.x,bos.y,70)
    
    bos.y += bosSpeed
    
  }
 }

  for (let enemy of enemies){
    
    fill(191, 188, 184)
    
    ellipse(enemy.x - 9,enemy.y + 19,15,5)
    fill(224, 183, 126)
    ellipse(enemy.x -5,enemy.y + 20,10)
    fill(0, 0, 0)
    ellipse(enemy.x,enemy.y,30)
    
    
    enemy.y += enemySpeed
    
    if (enemy.y>height){
      enemies.splice(enemies.indexOf(enemy),1)
       let respawn2 = {
      x: random (140,250),
      y: random (-800,0)
         
         
         
    }
        enemies.push(respawn2)
      escaped += 1
    }
    
    
    

    
  }
  
  fill(24, 112, 94)
   ellipse(pSpeedx,pSpeedy,40)
  
  fill(26, 24, 23)
  rect(pSpeedx,gunY, 10, 40)
  
  fill(26, 24, 23)
  rect(pSpeedx,gunY, 8, 45)
  
  fill(235, 174, 108)
  ellipse(pSpeedx,pSpeedy,33)
  
  fill(ammoColor,ammoColor2,ammoColor3)
  text(ammo,117,140,200,160)
  
   
  for (let enemy of enemies){
    for (let bullet of bullets){
      if (dist(enemy.x,enemy.y,bullet.x,bullet.y) < 10){
        enemies.splice(enemies.indexOf(enemy),1)
        bullets.splice(bullets.indexOf(bullets),1)
        
        let respawn = {
      x: random (140,250),
      y: random (-800,0)
    }
        enemies.push(respawn)
        score += 1
        
      }
    }
  }
  
  for (let bos of boss){
    for (let bullet of bullets){
      if (dist(bos.x,bos.y,bullet.x,bullet.y) < 10){
        
        bullets.splice(bullets.indexOf(bullets),1)
        
        bosLives -= 1
  
      }
    }
  }
  
  if (bosLives == 0){
    
    boss.splice(boss.indexOf(boss),1)
    
    
  }
      
      
  for (let enemy of enemies){
  if (dist(enemy.x,enemy.y,pSpeedx,pSpeedy) < 10){
    enemies.splice(enemies.indexOf(enemy),1)
    
    
    
   
      
        let respawn4 = {
      x: random (140,250),
      y: random (-800,0)
    }
        enemies.push(respawn4)
        gunY = 280
        pSpeedx = 200
        pSpeedy = 300
        bulletPosy = 300
    
    lives -= 1
  }
  }
  
  
  for (let bos of boss){
  if (dist(bos.x,bos.y,pSpeedx,pSpeedy) < 10){
    boss.splice(boss.indexOf(bos),1)
    
    gunY = 280
        pSpeedx = 200
        pSpeedy = 300
        bulletPosy = 300
    
    lives -= 3
    
    
  }
  }
  
  if (keyIsDown(39) == true){
    pSpeedx += pSpeedC
  }
  
    if (keyIsDown(37) == true){
    pSpeedx -= pSpeedC
  }

   if (keyIsDown(38) == true){
    pSpeedy -= pSpeedC
     gunY -= pSpeedC
     bulletPosy -= pSpeedC
  }
  
    if (keyIsDown(40) == true){
    pSpeedy += pSpeedC
      gunY += pSpeedC
      bulletPosy += pSpeedC
  }

  // // bullets
  //  if (keyIsDown(32) == true){
  //  fill(252, 157, 40)
  // ellipse(pSpeedx,bulletPosy -= bulletSpeed,5)
  // }
  
  
 if (pSpeedx <= 120){
   
   pSpeedx += pSpeedC
   
 }
  
  if (pSpeedx >= 280){
   
   pSpeedx -= pSpeedC
   
 }
  
  if (ammo <= 5){
    
    ammoColor = 255
    ammoColor2 = 3
    ammoColor3 = 3
    
  }
  if (ammo <= 0){
    
    bulletStatus = (pSpeedx,pSpeedy)
    ammo = 'NO AMMO'
    
    
  }
  
  text(score,120,200,200)
  text(lives,120,300,200)
  
  
  
  if (pSpeedy == 400){
    
    pSpeedy -= pSpeedC
    gunY -= pSpeedC
    
  }
  
  text(escaped,200,200,500)
  fill(255)
  text(lives,70,120,100)
  
  
 if (score % 4 == true){
  
 }
  
  if (lives == 0){
    
    background(0)
    text('you loose',220,220,100,100)
    noLoop()
    
  }
  
  

  
  
  for (let i = 0; i < 1; i++){
  
    if (score % 5 == 0){
      
      console.log('10')
      
    }
    
    
}


    
    
  }
  
  


function mousePressed (){
  
  
  
  ammo -=1
  
  let bullet = {
    
    x: pSpeedx,
    y: bulletPosy, 
    
    
  }
  
  bullets.push(bullet)
  
}

