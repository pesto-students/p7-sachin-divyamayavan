
class Graph
{
    constructor(Vertices)
    {
        this.Vertices = Vertices;
          
        this.grap = new Array(Vertices+ 1);
        for(let i = 0; i < Vertices + 1; i++)
        {
            this.grap[i] = new Array(Vertices+1);

            for(let j = 0; j < (Vertices+ 1); j++)
            {
                this.grap[i][j] = 0;
            }
             
        }
  
        for(let i = 1; i <= Vertices; i++)
            this.grap[i][i] = 1;
    }
     
    addEdge(value, width)
    {
        this.grap[value][width] = 1;
        this.grap[width][value] = 1;
    }
     
    isReachable(side, depth)
    {
        if (this.grap[side][depth] == 1)
            return true;
        else
            return false;
    }
     
    computePaths()
    {
        
        for(let k = 1; k <= this.Vertices; k++)
        {
            for(let i = 1; i <= this.Vertices; i++)
            {
                for(let j = 1; j <= this.Vertices; j++)
                    this.grap[i][j] = this.grap[i][j] | ((this.grap[i][k] != 0 &&
                              this.grap[k][j] != 0) ? 1 : 0);
            }
        }
    }
 
}
 
let _grap = new Graph(4);
    _grap.addEdge(1, 2);
    _grap.addEdge(2, 3);
    _grap.addEdge(1, 4);
    _grap.computePaths();
  
    let u = 4, v = 3;
    if (_grap.isReachable(u, v))
        console.log("Yes");
    else
        console.log("No");