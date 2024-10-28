# WEBSCRIPTINGTWO

MDIA-3294, Assignment One

Hi, In order to run this project you will have to do the following.

In the terminal, of this project you will have to press enter the command:
cd showroom

This will bring you into the working project.

The next step is to install the node_modules, you can do so by the command:
npm install

The next step in the proccess will allow you to make a live server where the project can be viewed. You can do this with the command:
npm run dev

There will be a link with a live server, usually looks like localhost:5173.

Thank you!

## Overview.

This is our first assignment using react, and I compared it to template literals at first, but it's so much more complex.

You can write functions within functions, and you can use arrays and all kinds of coding techniques to make semantic and easily navigatable web pages.

I did not understand the concepts at first, but after repetition some things make sense, but don't ask me to explain I could totally be wrong.

How I decided to learn was just making errors and fixing them, so i'm not sure if my code is entirely semantic but if it works then I would consider that good enough.

I'll only continue to improve the more I learn.

With that being said, the theme of my website is archive fashion. One of my hobbies is collecting clothes, and i have an appreciation for product design that is intententional and hard to find. In the presence of fast fashion, I think buying products that will last you a lifetime is more important. Some of the items you may not have to buy again because of the dedication, materials and attention to detail that goes into the construction.

The first section of the website, is a card layout with a item title, item description and item price that is pulled from an array at the top of the JSX page.
We learned how to useState in our demo, and that allowed for the creation of a favourite feature for each of the items in the first section of the page.

The second section of the website, is a card layout with a 3d product model viewer. I integrated a JS plugin that can allow you to view GLB files (3d model format) on the web. I made a component called model viewer and this was perfect for another section that I could add onto the website that would tie in with the current them.

## I ran into my first CHALLENGE:

My 3d model was too large to published to the git repository. After reading up on why I should make anything committed yet, I found out that git repositorys are kept below a certain size limit.

The solution was to install homebrew, which was straight forward with the help of the documentation and CHATGPT.

When I install homebrew I installed, git LFS which is git 'Large File Storage'.

I then went into visual studio code where I had my project open and opened the terminal and ran the command:
git lfs install

Then i tracked down the file that would not commit because it was large in size and added it to the large file storage with the command:
git lfs track "rickowenramones.glb"

What this did is add my file into the LFS, located in the .gitattributes.

When I wanted to commit this change to repository, I confirmed this change with the command:

git add .gitattributes

because that is where the file was now stored, which allowed me to succesfully commit my progress to the repository!

After my intial commit and LFS initialization I ran into no further technical issues.

## Third section

I made a third section for users to learn about designers, brands, and resources. I used tailwind to style the layout of the information section in the InformationSection.jsx component. How I made this work the way I expected it to was create an array for each of the different categories that I included in the formation section. This is the BRAND_GALLERY, DESIGNER_GALLERY, and RESOURCE_GALLERY.

When the array were ready, I entered the information section component and passed the paramater desginer, brand, and resource into the function as properties so that I would be able to get the information needed from the array when the useState was available on the App.jsx component.

For this, to be laid out in the ideal format i put into the tailwindcss classes, I had to put them in the order that I wanted them to show on the page.

The first section was a designer map looping through each item in the designer array using the designer prop.

designerInfo.designer is rendered as a title, designerInfo.description is render as a paragraph.

designerInfo.involvement is rendered as additional details.

Each item in the arra can be tracked with the unique key, that is tracked by designerInfo.id.

The same practice was used on the resources, and brands sections.

I used hover animations on the learn more links, and when clicked they pull the link from the array and redirect users to the resource.

## CHALLENGE TWO

I was importing fonts into my projects and after reading the documentation, I was able to find a solution to use my font as a tailwind class.

Here hows I did that.

I navigated to the tailwind.config.js
and wrote included an extendsion for font families. When I included these I was able to style my text with the font-(Fontname)!
