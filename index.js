

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #002357;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: calc(100% - 40px); /* Adjusted width to account for margin */
    position: fixed;
    top: 0;
    left: 10px; /* Adjusted left position to account for margin */
    right: 20px; /* Adjusted right position to account for margin */
    z-index: 1000;
    box-sizing: border-box; /* Ensure padding is included in the width */
    border-radius: 100px; /* Added border radius */
    margin: 10px; /* Added margin to match .main */
    border-right: 2px solid #000000; /* Added right border */
    border-left: 2px solid #000000;
    border-top: 2px solid #000000;
    border-bottom: 2px solid #000000;
  }
  
  .logo img {
    height: 50px;
    transition: transform 0.3s;
    border-radius: 100px;
  }
  
  .logo img:hover {
    transform: scale(1.8);
  }
  
  .navbar {
    display: flex;
    align-items: center;
  }
  
  .navbar-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-left: auto; /* Move toggle button to the right */
  }
  
  .navbar-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.4s;
  }
  
  .navbar nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .navbar nav ul li {
    margin: 0 15px;
  }
  
  .navbar nav ul li a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    padding: 10px 15px;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 5px;
  }
  
  .navbar nav ul li a:hover,
  .navbar nav ul li a.active {
    background-color: #161b22;
    border-radius: 50px;
    color: #ffffff;
    transition: 0.5s;
  }
  
  .main {
    padding: 20px;
    text-align: center;
    background-color:  #8b8b8b;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 95px 20px 20px 20px; /* Adjusted margin to account for fixed navbar */
    border-radius: 50px;
    color:  8px solid  #000000;
   
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: flex-start;
    }
  
    .navbar-toggle {
        display: flex;
    }
  
    .navbar nav ul {
        display: none;
        flex-direction: column;
        width: 100%;
    }
  
    .navbar nav ul li {
        margin: 10px 0;
    }
  
    .navbar nav ul li a {
        width: 100%;
        text-align: center;
    }
  
    .navbar nav ul.active {
        display: flex;
    }
  }
  