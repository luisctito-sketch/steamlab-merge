/* STEAMLab Merge Cube | surface facing the tracked IMAGE PLANE (XY).
   Plane target coordinates in MindAR are x and y, with positive z out of its face. */
AFRAME.registerComponent('thermal-surface', {
  schema: {x:{type:'number', default:0}, y:{type:'number', default:0}},
  init: function() {
    const THREE = AFRAME.THREE;
    this.T=(x,y)=>30+6*Math.sin(x/1.4)*Math.cos(y/1.3)+0.6*x+0.4*y;
    // Same thermal field as the Hiro lab, mapped onto a square centered on the target.
    const n=49, pos=[], colors=[], indices=[];
    const scale=0.82/6;
    for(let j=0;j<n;j++) for(let i=0;i<n;i++){
      const x=-3+6*i/(n-1), y=-3+6*j/(n-1), temp=this.T(x,y);
      // IN THE TARGET XY PLANE: z is the measured visual elevation.
      const h=(temp-30)*0.16;
      pos.push(x*scale, y*scale, 0.12+h*0.35);
      const c=new THREE.Color();
      c.setHSL(0.60-0.48*Math.max(0,Math.min(1,(temp-22)/17)),0.87,0.58);
      colors.push(c.r,c.g,c.b);
    }
    for(let j=0;j<n-1;j++) for(let i=0;i<n-1;i++){
      const a=j*n+i,b=a+1,c=a+n,d=c+1;
      indices.push(a,b,c,b,d,c);
    }
    const geo=new THREE.BufferGeometry();
    geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
    geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    geo.setIndex(indices);geo.computeVertexNormals();
    this.mesh=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({vertexColors:true,side:THREE.DoubleSide,depthTest:false}));
    this.mesh.renderOrder=10;
    this.el.object3D.add(this.mesh);
    this.dot=new THREE.Mesh(new THREE.SphereGeometry(0.014,14,10),new THREE.MeshBasicMaterial({color:0xffffff,depthTest:false}));
    this.dot.renderOrder=11;this.el.object3D.add(this.dot);
    // Debug / tracking confirmation: always-visible magenta sphere near the surface.
    this.debug=new THREE.Mesh(new THREE.SphereGeometry(0.025,12,8),new THREE.MeshBasicMaterial({color:0xff48da,depthTest:false}));
    this.debug.position.set(-0.30,-0.30,0.36);this.debug.renderOrder=12;this.el.object3D.add(this.debug);
    this.update();
  },
  update: function(){
    if(!this.dot)return;
    const x=this.data.x,y=this.data.y;
    this.dot.position.set(x*(0.68/6),y*(0.68/6),0.12+(this.T(x,y)-30)*0.16*0.35+0.022);
  },
  remove: function(){
    for(const object of [this.mesh,this.dot,this.debug]){
      this.el.object3D.remove(object);
      object.geometry.dispose();object.material.dispose();
    }
  }
});
