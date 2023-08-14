function worker(name: string | null | undefined){
    if(name)
        return 0;
    return 1;
}

worker(null)