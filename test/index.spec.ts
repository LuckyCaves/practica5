import { describe, expect, it, vi } from "vitest";
import worker, { type Env } from "../src/index";

describe("Worker fetch handler", () => {
	it("returns database rows as JSON", async () => {
		const rows = [{ id: 1, name: "Ada" }];
		const all = vi.fn().mockResolvedValue({ results: rows });
		const prepare = vi.fn().mockReturnValue({ all });
		const fakeEnv = { practica6: { prepare } } as unknown as Env;

		const response = await worker.fetch(
			new Request("https://example.com/"),
			fakeEnv,
			{} as ExecutionContext,
		);

		expect(response.status).toBe(200);
		expect(response.headers.get("content-type")).toContain("application/json");
		expect(await response.json()).toEqual({ message: "Hello world", dbData: rows });
		expect(prepare).toHaveBeenCalledWith("SELECT * FROM users");
		expect(all).toHaveBeenCalledOnce();
	});

	it("returns an empty list when the query has no rows", async () => {
		const fakeEnv = {
			practica6: { prepare: () => ({ all: async () => ({ results: [] }) }) },
		} as unknown as Env;

		const response = await worker.fetch(
			new Request("https://example.com/"),
			fakeEnv,
			{} as ExecutionContext,
		);

		expect(await response.json()).toEqual({ message: "Hello world", dbData: [] });
	});
});
