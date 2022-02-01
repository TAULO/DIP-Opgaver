class Point2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        if (typeof x !== "number" || typeof y !== "number") 
            throw new TypeError ("Type not Allowed") 
    }

    getX() {
        return this.x; 
    }
    getY() {
        return this.y; 
    }

    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));  
    }

    static shorterThan(p1, p2) {
        if (!p1 instanceof Point2D && p2 instanceof Point2D) 
            throw new TypeError("Arguments are not points")
        return p1.length() < p2.length()
    }
    
    minLength(arr) {
        return arr.reduce((prev, curr) => {
            Point2D.shorterThan(current, prev) ? curr : prev
        })
    }    
}
const p1 = new Point2D(2,5);
const p2 = new Point2D(5,100);
const p3 = new Point2D(10, 20)

const arr = [p2,p3];

console.log(p1.minLength(arr))

