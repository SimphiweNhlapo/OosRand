document.addEventListener('DOMContentLoaded', function() {
    const calendarElement = document.getElementById('calendar');
    const events = [
      { date: '2024-09-24', title: 'Heritage Day' },
    ];
  
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    function generateCalendar(month, year) {
      calendarElement.innerHTML = ''; // Clear previous content
  
      // Add header with the month and year
      const header = document.createElement('div');
      header.className = 'header';
      header.innerText = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
      calendarElement.appendChild(header);
  
      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Highlight today's date
    //   if (day === currentDay && month === currentMonth && year === currentYear) {
    //      dayCell.classList.add('today');
    //   }
  
      // Create empty blocks for days before the start of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        calendarElement.appendChild(emptyCell);
      }
  
      // Fill the calendar with days
      for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'day current-month';
        dayCell.innerText = day;
  
        // Check if there's an event on this day
        const eventDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const event = events.find(e => e.date === eventDate);
        
        if (event) {
          const eventElement = document.createElement('div');
          eventElement.className = 'event';
          eventElement.innerText = event.title;
          dayCell.appendChild(eventElement);
        }
  
        calendarElement.appendChild(dayCell);
      }
    }
  
    generateCalendar(currentMonth, currentYear);
  });
  