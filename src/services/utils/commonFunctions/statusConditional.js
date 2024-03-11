
export const statusConditioal =(status) =>{ 
    if(status === "Alive") return "#84ff00"
    if(status === "Dead") return "#f80000"
    if(status === "unknown") return "gray"
}