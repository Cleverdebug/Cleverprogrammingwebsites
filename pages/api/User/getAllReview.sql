SELECT
    ROW_NUMBER() OVER(
        ORDER BY
            cr.ReviewID DESC
    ) AS SNo,
    cr.ReviewID,
    cr.CompanyName,
    cr.LogoFileName,
    cr.UserName,
    cr.Designation,
    cr.Review,
    cr.ActiveStatus,
    cr.CreatedDate,
    cr.ModifyedDate,
    cr.CreatedBy,
    cr.ModifyedBy
FROM
    Tbl_client_reviews cr
ORDER BY
    cr.ReviewID DESC;