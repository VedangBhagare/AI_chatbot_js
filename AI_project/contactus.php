<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
    </head>
   
    <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Well-Come  Hodophile</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
      <button class="bg-dark"><a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a></button>
      </li>
      <li class="nav-item">
       <button class="bg-dark"> <a class="nav-link" href="#">Services</a></button>
      </li>
      
      <li class="nav-item">
      <button class="bg-dark"><a class="nav-link" href="about.php">About Us</a></button>
      </li>
      
      <li class="nav-item">
       <button class="bg-dark"> <a class="nav-link" href="contactus.php">Contact</a></button>
      </li>
      
        
        </div>
      </ul>
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
  </div>
</nav>

<div class="jumbotron">
  <h1>Contact Us</h1>
  <!-- <p>It's a very fabulous Memories...</p> -->
</div>


<section class="my-5">
<div class="py-3">
    <h2 class="text-center">Contact Us</h2>
</div>
<div  class="w-50 m-auto">
    <form method="post" action="userinfo.php">
        <div class="form-group">
        <label >Username</label>
        <input type="text" placeholder="Enter User Name" name="uname" autocomplete="off" class="form-control">
        </div>
        <div class="form-group">
        <label >Email Address</label>
        <input type="mail"  placeholder="Enter Email ID"name="email" autocomplete="off" class="form-control">
        </div>
        <div class="form-group">
        <label >Mobile</label>
        <input name="uno" placeholder="Enter Mobile Number" autocomplete="off" class="form-control">
        </div>
        <div class="form-group">
        <label >Comment</label>
        <textarea name="comment" placeholder="Type Here.."autocomplete="off" class="form-control"></textarea>
        </div>
        <input type="submit" class="btn btn-success">
</form>
</div>
</section>
</div>

<footer>
<p class="p-3 bg-dark text-white text-center">@hodophileAgency</p>
</footer>
</body>
</html>