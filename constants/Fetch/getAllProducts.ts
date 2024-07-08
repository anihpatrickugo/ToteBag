
export const getAllproducts = async () => {

    const req = await fetch(
        "https://api.timbu.cloud/products?organization_id=7dcc0570656048419dc302ddb9edf682&reverse_sort=false&page=1&size=10&Appid=S77LU50EH5N0D14&Apikey=840fff6944f54c77873a2d0288f5cd1320240706220159331550"
        )
    const res  = await req.json()

    return res.data
     
    
}