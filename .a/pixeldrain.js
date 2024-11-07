function modifyPixeldrainLink(link) {
    if (link.startsWith('https://pixeldrain.com/u/')) {
        const fileId = link.split('/').pop(); // Extract the file ID
        return `https://pixeldrain.com/api/file/${fileId}?download`; // Return the modified format
    }
    return link; // Return the original link if no modification is needed
}
