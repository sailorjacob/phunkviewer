const standardViewStyles = theme => ({
    lowerPaper: {
        margin: theme.spacing(1),
        color: "white",
        backgroundColor: theme.palette.info.light,
        overflow: "hidden"
    },
    spacer: {
        margin: theme.spacing(2),
    },
    wideIMG: {
        marginTop: theme.spacing(1),
        width: "95%",
        height: "auto"
    },
    previewCard: {
        margin: theme.spacing(2),
        textAlign: 'center',
        color: "white",
        overflow: "hidden",
        width: "35vw"
    }
});

export default standardViewStyles;