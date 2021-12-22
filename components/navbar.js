async function navigationBar() {

    return `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Food App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="index.html">Home</a> &ensp; 
                <a class="nav-link" href="search.html">Search</a> &ensp;  
                <a class="nav-link" href="cart.html">Cart</a> &ensp; 
                <a class="nav-link" href="receipe-of-the-day.html">Receipes of the Day</a> &ensp; 
                <a class="nav-link" href="trending-receipe.html">Trending Receipes</a>  
            </div>
        </div>
    </div>
</nav>`
}

export default navigationBar;