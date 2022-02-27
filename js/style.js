function navigationBar(){
    let button = $(".navigation-button");
    let wrapper = $(".navigation-wrapper");
    
    button.click(function(){
        wrapper.toggle();
    });
}

navigationBar();