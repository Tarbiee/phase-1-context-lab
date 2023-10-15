/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */


 function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }

  function createEmployeeRecords(employeeArray) {
    return employeeArray.map(createEmployeeRecord);
  }
  //createTimeInEvent
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
        const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(hour),
      date,
    };
        this.timeInEvents.push(timeInEvent);
        return this;
  }

  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(" ");
        const timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(hour),
      date,
    };
        this.timeOutEvents.push(timeOutEvent);   
    return this;
  }

  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);
    if (timeInEvent && timeOutEvent) {
      const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100;
      return hoursWorked;
    }
      return 0;
  }

  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date); // Calculate hours worked using hoursWorkedOnDate
      const payRate = this.payPerHour;
      const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
  }

  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(employee) {
      return employee.firstName === firstName;
    });
  }  

  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function(totalPay, employee) {
      return totalPay + allWagesFor.call(employee);
    }, 0);
  }
  
  
  







