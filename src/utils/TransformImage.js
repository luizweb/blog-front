function transformImage(strImage, strTransformation){
    const { groups: { path, image } } = strImage.match(/(?<path>https?:\/\/[^/]+\/[^/]+\/[^/]+\/[^/]+\/)(?<version>[^/]+)(?<image>\/.*)/);
    return `${path}${strTransformation}${image}`;    
}

export default transformImage;