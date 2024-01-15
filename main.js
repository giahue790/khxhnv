var object={
    hoTen:"",
    eMail:"",
    soDienThoai:"",
    diaChi:"",
    tenLoaiHoa:"",
    soLuong:"",
    loiNhan:"",
    giaTien:""
}
$("#btn-1").on("click",function(){
alert("Hoa hồng đã được chọn")
$("#btn-1").removeClass("btn-outline-info").addClass("btn-info")
$("#btn-2").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-3").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-4").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-5").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-6").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-7").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-8").removeClass("btn-info").addClass("btn-outline-info")
object.tenLoaiHoa="hoa hồng";
object.giaTien="250.000VND";
})

$("#btn-2").on("click",function(){
    alert("Hoa oải hương đã được chọn")
$("#btn-2").removeClass("btn-outline-info").addClass("btn-info")
$("#btn-1").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-3").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-4").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-5").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-6").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-7").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-8").removeClass("btn-info").addClass("btn-outline-info")
    object.tenLoaiHoa="hoa oải hương";
    object.giaTien="200.000VND";
   })

   $("#btn-3").on("click",function(){
    alert("Hoa tulip đã được chọn")
    $("#btn-3").removeClass("btn-outline-info").addClass("btn-info")
    $("#btn-1").removeClass("btn-info").addClass("btn-outline-info")
    $("#btn-2").removeClass("btn-info").addClass("btn-outline-info")
    $("#btn-4").removeClass("btn-info").addClass("btn-outline-info")
    $("#btn-5").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-6").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-7").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-8").removeClass("btn-info").addClass("btn-outline-info")
    object.tenLoaiHoa="hoa tulip";
    object.giaTien="230.000VND";
   })
   $("#btn-4").on("click",function(){
    alert("Hoa cẩm tú cầu đã được chọn")
    $("#btn-4").removeClass("btn-outline-info").addClass("btn-info")
    $("#btn-1").removeClass("btn-info").addClass("btn-outline-info")
    $("#btn-2").removeClass("btn-info").addClass("btn-outline-info")
    $("#btn-3").removeClass("btn-info").addClass("btn-outline-info")
    $("#btn-5").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-6").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-7").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-8").removeClass("btn-info").addClass("btn-outline-info")
    object.tenLoaiHoa="hoa cẩm tú cầu";
    object.giaTien="180.000VND";
   })

   $("#btn-5").on("click",function(){
    alert("Hoa cúc họa mi đã được chọn")
    $("#btn-5").removeClass("btn-outline-info").addClass("btn-info")
$("#btn-1").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-2").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-3").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-4").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-6").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-7").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-8").removeClass("btn-info").addClass("btn-outline-info")
    object.tenLoaiHoa="hoa cúc họa mi";
    object.giaTien="150.000VND";
    })
    
    $("#btn-6").on("click",function(){
        alert("Hoa hướng dương đã được chọn")
        $("#btn-6").removeClass("btn-outline-info").addClass("btn-info")
$("#btn-1").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-2").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-3").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-4").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-5").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-7").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-8").removeClass("btn-info").addClass("btn-outline-info")
        object.tenLoaiHoa="hoa hướng dương";
        object.giaTien="160.000VND";
       })
    
       $("#btn-7").on("click",function(){
        alert("Hoa mẫu đơn đã được chọn")
        $("#btn-7").removeClass("btn-outline-info").addClass("btn-info")
$("#btn-1").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-2").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-3").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-4").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-5").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-6").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-8").removeClass("btn-info").addClass("btn-outline-info")
        object.tenLoaiHoa="hoa mẫu đơn";
        object.giaTien="180.000VND";
       })
       $("#btn-8").on("click",function(){
        alert("Hoa linh lan đã được chọn")
        $("#btn-8").removeClass("btn-outline-info").addClass("btn-info")
$("#btn-1").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-2").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-3").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-4").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-5").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-6").removeClass("btn-info").addClass("btn-outline-info")
$("#btn-7").removeClass("btn-info").addClass("btn-outline-info")
        object.tenLoaiHoa="hoa linh lan";
        object.giaTien="170.000VND";
       })
       $("#btn-9").on("click",function(){
        alert("Đã đặt hàng thành công")
        console.log(object)
       })

