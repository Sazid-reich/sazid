# Render {}
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div />
    <!--M_*0 #div/1-->
    <div>
      <div>
        1
        <!--M_*2 #text/0-->
      </div>
      <!--M_$2-->
      <div>
        <div>
          1.1
          <!--M_*4 #text/0-->
        </div>
        <!--M_$4-->
      </div>
      <div>
        <div>
          1.2
          <!--M_*6 #text/0-->
        </div>
        <!--M_$6-->
      </div>
      <div>
        <div>
          1.3
          <!--M_*8 #text/0-->
        </div>
        <!--M_$8-->
      </div>
      <!--M_|1 #text/1 3,5,7-->
    </div>
    <div>
      <div>
        2
        <!--M_*10 #text/0-->
      </div>
      <!--M_$10-->
      <div>
        <div>
          2.1
          <!--M_*12 #text/0-->
        </div>
        <!--M_$12-->
      </div>
      <div>
        <div>
          2.2
          <!--M_*14 #text/0-->
        </div>
        <!--M_$14-->
      </div>
      <div>
        <div>
          2.3
          <!--M_*16 #text/0-->
        </div>
        <!--M_$16-->
      </div>
      <!--M_|9 #text/1 11,13,15-->
    </div>
    <div>
      <div>
        3
        <!--M_*18 #text/0-->
      </div>
      <!--M_$18-->
      <div>
        <div>
          3.1
          <!--M_*20 #text/0-->
        </div>
        <!--M_$20-->
      </div>
      <div>
        <div>
          3.2
          <!--M_*22 #text/0-->
        </div>
        <!--M_$22-->
      </div>
      <div>
        <div>
          3.3
          <!--M_*24 #text/0-->
        </div>
        <!--M_$24-->
      </div>
      <!--M_|17 #text/1 19,21,23-->
    </div>
    <!--M_|0 #text/2 1,9,17-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.D={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={outerItem:1,"#childScope/0":_.c={name:"1"},"#text/1(":new Map(_.d=[[0,_.g={"#childScope/0":_.e={name:"1.1"}}],[1,_.i={"#childScope/0":_.h={name:"1.2"}}],[2,_.k={"#childScope/0":_.j={name:"1.3"}}]])}],[1,_.o={outerItem:2,"#childScope/0":_.l={name:"2"},"#text/1(":new Map(_.m=[[0,_.p={"#childScope/0":_.n={name:"2.1"}}],[1,_.r={"#childScope/0":_.q={name:"2.2"}}],[2,_.t={"#childScope/0":_.s={name:"2.3"}}]])}],[2,_.x={outerItem:3,"#childScope/0":_.u={name:"3"},"#text/1(":new Map(_.v=[[0,_.y={"#childScope/0":_.w={name:"3.1"}}],[1,_.A={"#childScope/0":_.z={name:"3.2"}}],[2,_.C={"#childScope/0":_.B={name:"3.3"}}]])}]])},1:_.f,2:_.c,3:_.g,4:_.e,5:_.i,6:_.h,7:_.k,8:_.j,9:_.o,10:_.l,11:_.p,12:_.n,13:_.r,14:_.q,15:_.t,16:_.s,17:_.x,18:_.u,19:_.y,20:_.w,21:_.A,22:_.z,23:_.C,24:_.B},_.a.write=_.c.write=_.e.write=_.h.write=_.j.write=_.l.write=_.n.write=_.q.write=_.s.write=_.u.write=_.w.write=_.z.write=_.B.write=_._["packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0/write"](_.a),_.g._=_.i._=_.k._=_.f,_.f._=_.o._=_.x._=_.a,_.p._=_.r._=_.t._=_.o,_.y._=_.A._=_.C._=_.x,_.D),2,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",4,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",6,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",8,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",10,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",12,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",14,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",16,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",18,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",20,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",22,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",24,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",0,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      
destroyed 3
destroyed 3.1
destroyed 3.2
destroyed 3.3
destroyed 1.3
destroyed 2.3
    </div>
    <!--M_*0 #div/1-->
    <div>
      <div>
        1
        <!--M_*2 #text/0-->
      </div>
      <!--M_$2-->
      <div>
        <div>
          1.1
          <!--M_*4 #text/0-->
        </div>
        <!--M_$4-->
      </div>
      <div>
        <div>
          1.2
          <!--M_*6 #text/0-->
        </div>
        <!--M_$6-->
      </div>
      <!--M_|1 #text/1 3,5,7-->
    </div>
    <div>
      <div>
        2
        <!--M_*10 #text/0-->
      </div>
      <!--M_$10-->
      <div>
        <div>
          2.1
          <!--M_*12 #text/0-->
        </div>
        <!--M_$12-->
      </div>
      <div>
        <div>
          2.2
          <!--M_*14 #text/0-->
        </div>
        <!--M_$14-->
      </div>
      <!--M_|9 #text/1 11,13,15-->
    </div>
    <!--M_|0 #text/2 1,9,17-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.D={0:_.a={items:[1,2,3],"#text/2(":new Map(_.b=[[0,_.f={outerItem:1,"#childScope/0":_.c={name:"1"},"#text/1(":new Map(_.d=[[0,_.g={"#childScope/0":_.e={name:"1.1"}}],[1,_.i={"#childScope/0":_.h={name:"1.2"}}],[2,_.k={"#childScope/0":_.j={name:"1.3"}}]])}],[1,_.o={outerItem:2,"#childScope/0":_.l={name:"2"},"#text/1(":new Map(_.m=[[0,_.p={"#childScope/0":_.n={name:"2.1"}}],[1,_.r={"#childScope/0":_.q={name:"2.2"}}],[2,_.t={"#childScope/0":_.s={name:"2.3"}}]])}],[2,_.x={outerItem:3,"#childScope/0":_.u={name:"3"},"#text/1(":new Map(_.v=[[0,_.y={"#childScope/0":_.w={name:"3.1"}}],[1,_.A={"#childScope/0":_.z={name:"3.2"}}],[2,_.C={"#childScope/0":_.B={name:"3.3"}}]])}]])},1:_.f,2:_.c,3:_.g,4:_.e,5:_.i,6:_.h,7:_.k,8:_.j,9:_.o,10:_.l,11:_.p,12:_.n,13:_.r,14:_.q,15:_.t,16:_.s,17:_.x,18:_.u,19:_.y,20:_.w,21:_.A,22:_.z,23:_.C,24:_.B},_.a.write=_.c.write=_.e.write=_.h.write=_.j.write=_.l.write=_.n.write=_.q.write=_.s.write=_.u.write=_.w.write=_.z.write=_.B.write=_._["packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0/write"](_.a),_.g._=_.i._=_.k._=_.f,_.f._=_.o._=_.x._=_.a,_.p._=_.r._=_.t._=_.o,_.y._=_.A._=_.C._=_.x,_.D),2,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",4,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",6,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",8,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",10,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",12,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",14,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",16,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",18,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",20,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",22,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",24,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/components/child.marko_0_name_write",0,"packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0_items",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #text
removed #text in #document/html0/body1/div2
inserted #text
removed #text in #document/html0/body1/div2
inserted #text
removed #text in #document/html0/body1/div2
inserted #text
removed div after #document/html0/body1/div5
removed #text in #document/html0/body1/div2
inserted #text
removed div after #document/html0/body1/div4/div3
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed div after #document/html0/body1/div5/div3
```