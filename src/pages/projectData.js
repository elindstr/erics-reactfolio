import sunnysideImg from '../assets/media/full/sunnyside.png'
import oahImg from '../assets/media/full/oah.png'
import iagoImg from '../assets/media/full/iago.png'
import tetrisImg from '../assets/media/full/tetris.png'
import hangmanImg from '../assets/media/full/hangman.png'
import tictacImg from '../assets/media/full/tictac.png'

const projects = [
    {
        'name': 'Sunnyside',
        'img': sunnysideImg,
        'gitLink': 'https://github.com/elindstr/sunnyside',
        'deployedLink': 'https://sunnyside-b12389656e81.herokuapp.com/',
        'tech': 'Node.js, MySQL',
        'description': `This was a bootcamp group project I led. Styled for a fictitious pool cleaning service, this cloud-based Enterprise Resource Planning (ERP) system is easily restylable for any small business to manage employee, customer, and product databases, assign and track employee assignments, generate invoices and handle payments, and run accounting reports. From a public-facing landing page, administrators can login to their ERP dashboard, employees can login to manage their work schedules and log their services and expenses, and customers can login to view and pay their invoices.
        
        We use a MySQL database with Sequelize for object-relational modeling, a Node.js Express server serving RESTful front-end API routes, and Express Handlebars as a templating engine. We use generate-password and bcrypt for generating and hashing login credentials and dotenv for managing sensitive environmental variables. We use Nodemailer to email users their login credentials and notify customers of invoices. And we use Stripe as an online invoicing and payment handler.`
    },
    {
        'name': 'OAH Search',
        'img': oahImg,
        'gitLink': 'https://github.com/elindstr/oah-search',
        'deployedLink': 'https://www.ericjlindstrom.com/',
        'tech': 'Node.js, Nginx',
        'description': `I regularly litigate before the California Office of Administration Hearings (OAH), which adjudicates thousands of disputes involving public agencies each year. Amazingly, OAH does not publish its decisions.

        So annually I send OAH a request pursuant to the California Public Records Act, request all the decisions issued that year for the subset of OAH cases I care about. OAH produces these decisions to me in one giant PDF scan. I have some python scripts that recognize and OCR each decision and then each as both a PDF and a text file. I then upload the files to a python web server, which serves a website allowing users to search for decisions among several types of cases. For performance, the script searches the text files, but then serves a link to the original pdf file.
        
        This database is tremendously useful in my law practice, giving my firm ready access to decisions that are not publicly accessible.
        
        I originally wrote this as a pure python web server, but recently rewrote as a node.js application deployed from the ground up on a ionos cloud server running Nginx and PM2. The app features a robust search term parsing logic.`
    },
    {
        'name': 'Iago',
        'img': iagoImg,
        'gitLink': 'https://github.com/elindstr/iago',
        'deployedLink': 'https://elindstr.github.io/iago/',
        'tech': 'JS / Swift',
        'description': `First developed for iOS in 2020 out of a pandemic hobby, Iago is now a javascript web app (where developers are free!).
        
        The robot analyzes the current board position solely with conditional logic choosing among the current potential moves. Nevertheless, the robot is surprisingly able to outperform small children.
        
        Iago provides gameplay options of human v. human, human v. robot, or (look out!) robot v. robot. Iago has multiple features including a new game button, a back button, and the ability to convert either player to robot or human mid-game.
        
        Othello is a passion of mine, and I had a lot of fun developing this game as one of my first serious programming projects.`
    },
    {
        'name': 'Tetris',
        'img': tetrisImg,
        'gitLink': 'https://github.com/elindstr/falling-blocks',
        'deployedLink': 'https://elindstr.github.io/falling-blocks/',
        'tech': 'JS / PHP',
        'description': `I took a few weeks off work in July 2022 to recover from brain surgery and wrote this program as proof to myself that my brain still worked. It could use some more polishing. This was my first practice implementing PHP, which I used to persistently store high score data.`
    },
    {
        'name': 'Hangman',
        'img': hangmanImg,
        'gitLink': 'https://github.com/elindstr/hangman',
        'deployedLink': 'https://elindstr.github.io/hangman/',
        'tech': 'JS',
        'description': `Testing custom mobile keyboard.`
    },
    {
        'name': 'TicTacRobot',
        'img': tictacImg,
        'gitLink': 'https://github.com/elindstr/tictacRobot',
        'deployedLink': 'https://elindstr.github.io/tictacRobot/',
        'tech': 'JS',
        'description': `Testing robot functionality.`
    }
]

export default projects