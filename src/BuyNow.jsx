function BuyNow() {
    let content;
    if(isLogedIn){
        content = <AdminPannel />
    }else {
        content = <LoginForm />
    }
}