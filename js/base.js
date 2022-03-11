AFRAME.registerComponent("base", {
    schema:{
        radius: {type:"number", default: 15},
        height: {type:"number", default: .5}
    },
    init: function(){
        this.el.setAttribute("position", {x:0, y:-0.25, z:0})
        this.el.setAttribute("rotation", {x:0, y:0, z:0})
        this.el.setAttribute("material", {color: "#3998db"})

        this.el.setAttribute("geometry", {
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height
        })
    }
})