export const UserModel = (db) => ({

    findAll: async () => {
        const result = await db.query("SELECT * FROM users ORDER BY id DESC");
        return result.rows;
    },

    findById: async (id) => {
        const result = await db.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        );
        return result.rows[0];
    },

    findByEmail: async (email) => {
        const result = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        return result.rows[0];
    },

    create: async ({ email, password, role }) => {
        const result = await db.query(
            `INSERT INTO users (email, password, role)
       VALUES ($1, $2, $3)
       RETURNING *`,
            [email, password, role]
        );
        return result.rows[0];
    },

    update: async (id, data) => {
        const result = await db.query(
            `UPDATE users
       SET email = COALESCE($1, email),
           role = COALESCE($2, role),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $3
       RETURNING *`,
            [data.email, data.role, id]
        );
        return result.rows[0];
    },

    delete: async (id) => {
        await db.query("DELETE FROM users WHERE id = $1", [id]);
        return { message: "User deleted" };
    }

});