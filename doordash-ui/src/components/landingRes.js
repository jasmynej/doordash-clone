import '../styles/landing-page.css'

function LandingPageFav({restaurant}){

    return (
        <div class="restaurant-landing">
            <img src="https://image.freepik.com/free-photo/top-close-view-bowl-vegetable-salad-with-knife-dark-grey-background_140725-135962.jpg" id="rest-img"/>
            <p id="name">{restaurant.name}</p>
            <p id="details">{restaurant.time} mins | $0 delivery fee, first order</p>
        </div>
    )
}

export default LandingPageFav;