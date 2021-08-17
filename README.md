# Covid-19-app  |[Link](https://musing-hoover-063808.netlify.app) |

## Authors
- Tommy Chung |[LinkedIn](https://www.linkedin.com/in/tommy-chung93)|  |[GitHub](https://github.com/tommyc93)|

### Approach
#### Picking a Project Idea
Started with wire-framing to decide how I wanted to approach the project.  I thought that it would be cool to create an informative app about Covid-19.

#### Data Structure
- Create and link HTML, Javascript, and CSS

## User Stories
#### Core
- User should be able to click to active Covid-19 links in the header
- Should be usable in both windows and mobile viewing
- User can be able to scroll through a carousel of images using buttons
- Convert and filter Covid-19 API with buttons depending on the continent

#### Stretch
- Carousel of images
- Incorporate a scroll bar for the Covid-19 dataset.
- Make it mobile friendly
- Use Modals
## Technologies/Languages Used
- HTML
- jQuery
- CSS
- Javascript
- Ajax

#### Project Management, hosting, and deployed
- GitHub
- Netlify

#### Unsolved Problems

#### Solved Problems
- Was able to figure out why I could not call my API correctly.  I forgot that a normal for loop couldn't be used in my instance because the data was a set of objects within objects within objects.  I had to use a for in loop referencing dataset in data.  To call the information I had use data[dataset] first then I could I use dot notation.
- Learned to create a separate scrollbar for my dataset by putting it in a div, and adjusting the size to a smaller window-size.
- Learned how to use flexbox by just creating everything in a div and giving them their own unique id/class.

#### Reflection Section
- If I had more time I would have like to incorporate Modals, but I just didn't know where I would use it.

