function dateBefore(d, curDate){
    // console.log('comparing: ', d, curDate);
    // console.log(d.getFullYear(), curDate.getFullYear());
    if(d.getFullYear() < curDate.getFullYear()) return true;
    if(d.getFullYear() > curDate.getFullYear()) return false;
    // console.log(d.getMonth(), curDate.getMonth());
    if(d.getMonth() < curDate.getMonth()) return true;
    if(d.getMonth() > curDate.getMonth()) return false;
    // console.log(d.getDate(), curDate.getDate());
    if(d.getDate() < curDate.getDate()) return true;
    return false;
}
export default dateBefore;