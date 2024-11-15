let playerPos, playerVel, playerAcc;
let enemyPos, enemyVel, enemyAcc;
let u = 600, v = 200;
let g = 155;
let score = 0, lives = 3;
function setup(){
	createCanvas(u, v);
	playerPos = createVector(15, 140);
	playerVel = createVector();
	playerAcc = createVector(-0.001, 0.4);
	// Acc Vector(friction, gravity)
	enemyPos = createVector(500, 155);
	enemyVel = createVector(-5, 0);
	//enemyAcc = createVector();


}
function loop(){
	keyIsDown(86) = true;
}
function draw(){
	background(50);
	// Ground
	fill(100);
	rect(0, 185, 600, 15);
	// Player
	fill(35, 200, 35);
	rect(playerPos.x, playerPos.y, 30, 30);
	// rect(x, y, w[idth], h[eight]);

	// Enemy 
	fill(220, 0, 0);
	rect(enemyPos.x, enemyPos.y, 30, 30);


	playerPos.add(playerVel);
	enemyPos.add(enemyVel);

	playerVel.add(playerAcc);
	// enemyVel.add(acc);
	
	// Enemy Wrap
	if(lives === 0){
        gameOver();
    }else if(enemyPos.x < -30){
        enemyPos.x = 635;
		score ++;
	}
	
	// For platformer not Side Scroller
	if(playerPos.x > width || playerPos.x < width){
        playerVel.x *= -1;
        //playerAcc.x *= -1;
    }
	// Gravity
	/*if(pos.y > height){
        vel.y *= -1;
        vel.y *= bounce;
        pos.y = height;
    }  */

	if(abs(playerVel.x) < 0.05 ){ 
        playerVel.x = 0;
        //friction = 0;
    }
	if(playerPos.y > g){
		playerPos.y = g
	}
	/*if(keyPressed() == 'w'){
		playerPos.y -= 50;
	}*/

	// Collisions
	if(enemyPos.x < playerPos.x + 30 && 
		enemyPos.y == playerPos.y){
		 enemyPos.x = 600 ;
		 lives --;
	}

	fill(50, 200, 50);
	text("Score: " + score, 10, 20);
	text("Lives: " + lives, 550, 20);
	if(lives < 0){
		lives = 0;
	}
	if(lives < 1){
		gameOver();
	}
	/*if(enemyPos.y < playerPos.y + 30 /*&& (30 > enemyPos.x > -30)){*/
	//	enemyPos.x = 200;
	//}



}
function keyPressed(){
	print(keyCode)
	if(playerPos.y == g && keyCode == 86){
		//if(key === 'w'){
		playerVel.y = -50;
	}

	if(playerPos.y == g && (keyCode == 32 || 
		keyCode == 87 || keyCode == 38)){
		//if(key === 'w'){
		playerVel.y = -10;
	}
	/*if(keyCode == 67){
		loop
	}*/
		//playerVel = -5;
	//playerPos.y += 50;
	if(keyCode == LEFT_ARROW){
		gameOver;
	}
	
	
}


function gameOver(){
	noLoop();
	background(50);
	//push();
	fill(50, 200, 50);
	textSize(55);
	textAlign(CENTER, CENTER);
	text("Game Over", width/2, height/2);
	fill(40, 140, 40);
	textSize(30);
	text("Click to Play again.", width/2., height/2 + 50);
	//pop();
}

