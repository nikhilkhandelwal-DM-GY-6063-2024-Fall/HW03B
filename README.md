# HW03-B

**This is a submission of Homework for Week 3 Part B.**

This repository contains a p5.js sketch that generates a rotational geometric spiral pattern using sqaures on the canvas.

It features alternating black and white squares, gradually rotating and scaling down toward the center. 
 
This type of design is known for its visual appeal, and it's commonly used in abstract or optical art to create the illusion of movement and depth.

Canvas Setup: The canvas is created to match the window size, with a white background (rgb(255, 255, 255)), providing a clean slate for the design.

Centered Rectangles: The origin is translated to the center of the canvas (translate(width/2, height/2)), ensuring all shapes are drawn from the middle of the canvas.

Rotating Rectangles: A series of 20 concentric rectangles is drawn, each rotated by PI/10 radians. This creates a spiraling effect as the rectangles rotate around the center.

Alternate Colors: The rectangles alternate between black and white (fill(0) and fill(255)) for a contrasting visual effect.

Decreasing Size: Each subsequent rectangle is scaled down to 85% of the size of the previous one, creating a shrinking spiral pattern toward the center.

**Examples of Optical Illusion** 
Image on repo:
**Example 1**  
![Example 1](https://github.com/nikhilkhandelwal-DM-GY-6063-2024-Fall/HW03B/blob/main/Optical%20Ill.jpg)
**Example 2**  
![Example 2](https://github.com/nikhilkhandelwal-DM-GY-6063-2024-Fall/HW03B/blob/main/Op%20Ill.jpg)