// #120: Triangle
export function minimumTotal(triangle: number[][]): number {

  const paths = buildPathList(triangle);
  let minSum: number | undefined = undefined;

  for(let pathCounter = 0; pathCounter < paths.length; pathCounter++){

    const path = paths[pathCounter];
    let pathSum = 0;

    for(let pathNodeCounter = 0; pathNodeCounter < path.length; pathNodeCounter++){
      const triangleNodeIndex = path[pathNodeCounter];
      const triangleNode = triangle[pathNodeCounter][triangleNodeIndex];
      pathSum = pathSum + triangleNode;
    }

    if(minSum === undefined || pathSum < minSum){
      minSum = pathSum;
    }
  }

  return minSum as number;
}

function buildPathList(triangle: number[][]): number[][] {
  const lvlCount = triangle.length;
  let pathList: number[][] = [];


  for(let levelCounter = 0; levelCounter < lvlCount; levelCounter++){

    if(levelCounter === 0){
      pathList = [ [ 0 ] ];
    } else{
      const newPathList: number[][] = [];

      for(let nodeCounter = 0; nodeCounter < pathList.length; nodeCounter++){
        const path = pathList[nodeCounter];

        const newPath1 = [ ...path, path[path.length - 1] ]; 
        const newPath2 = [ ...path, path[path.length - 1] + 1 ]; 

        newPathList.push(newPath1, newPath2);
      }

      pathList = newPathList;
    }

  }

  return pathList;
}