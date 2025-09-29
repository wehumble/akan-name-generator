const akanNames = {
    Sunday:    { Male: "Kwasi",   Female: "Akosua" },
    Monday:    { Male: "Kwadwo",  Female: "Adwoa"  },
    Tuesday:   { Male: "Kwabena", Female: "Abenaa" },
    Wednesday: { Male: "Kwaku",   Female: "Akua"   },
    Thursday:  { Male: "Yaw",     Female: "Yaa"    },
    Friday:    { Male: "Kofi",    Female: "Afua"   },
    Saturday:  { Male: "Kwame",   Female: "Ama"    }
  };
  
  document.getElementById("akanForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const resultDiv = document.getElementById("result");
  
    if (!birthdate || !gender) {
      resultDiv.style.color = "red";
      resultDiv.textContent = "Please fill in both fields.";
      return;
    }
  
    const date = new Date(birthdate);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  
    const akanName = akanNames[dayOfWeek][gender];
  
    resultDiv.style.color = "green";
    resultDiv.textContent = `You were born on a ${dayOfWeek}. Your Akan name is ${akanName}.`;
  });
  