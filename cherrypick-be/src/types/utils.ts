

function toItem(data: any): Item | null {
    if (!data)
        return null;
    if (!data.title || !data.author)
        return null;
    return {
        id: data.$id,
        title: data.title,
        author: data.author,
        cover: data.cover,
        description: data.description,
        type: data.type,
    };
}

export { toItem };