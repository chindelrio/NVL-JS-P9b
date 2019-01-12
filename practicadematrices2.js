<script>
var a = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo" ;
var b = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti" ;
var dias = a.split(",") ;
var ciudades = b.split(".") ;
var conciertos = [];
for (i = 0; i<dias.length;i++) {
	conciertos.push([dias [1],ciudades[1]]);
    };
document.write(conciertos)
</script>