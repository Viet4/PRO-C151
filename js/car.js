AFRAME.registerComponent("car", {
    schema:{
        model_obj: {type:"string", default:"./assets/Car/tinker.obj"},
        model_mtl: {type:"string", default:"./assets/Car/obj.mtl"},
        rotation: {type:"number", default: 0}
    },
    init: function(){
        this.el.setAttribute("position", {x: 0, y: 0, z: 0})
        this.el.setAttribute("rotation", {x: -90, y: 0, z: 0})
        
        this.el.setAttribute("obj-model", {
            obj: this.data.model_obj,
            mtl: this.data.model_mtl
        });

        var scale = .5 + " "
        this.el.setAttribute("scale", scale+scale+scale)
    },
    tick: function(){
        this.data.rotation = this.data.rotation + .5;
        var rotate = this.el.getAttribute("rotation")
        rotate.y = this.data.rotation
        this.el.setAttribute("rotation", {x: -90, y: rotate.y, z: 0})
    }
})