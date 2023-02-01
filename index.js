
/*function superBowlWin(record) {
    const result = record.find(el => el.result === "W");
    return result ? result.year : undefined;
}
*/

const superbowlWin = (record) => {
    let winningYear = record.find(d => d.result === "W"); 
    return winningYear ? winningYear.year : undefined; 
}
 


