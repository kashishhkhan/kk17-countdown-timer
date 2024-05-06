import { differenceInSeconds } from "date-fns";
import inquirer from 'inquirer';
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please Enter The Amount Of Time In Seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Provide A Valid Numerical Value";
        }
        else if (input > 60) {
            return "Please Ensure The Seconds Value Is Within The Range Of 0 To 59!";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(value) {
    const initTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(initTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("The Time Limit Has Elapsed");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
